import {
  Box,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { useState, createContext, useEffect } from "react";
import { SortbySelect } from "../components/SortBySelect";
import {
  CheckboxFilterPopover,
  PriceFilterPopover,
  LangFilterPopover,
  CountryFilterPopover,
  DurationFilterPopover,
} from "../components/Filter";
// import { MobileFilter } from "./MobileFilter";
import { products } from "../data/_data";
import { Applications } from "../components/Applications";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useUpdateUserMutation } from "../src/store/index";

export const ProductsContext = createContext();
function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredProducts.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const paginate = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  const [userId, setUserId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const userIdParam = searchParams.get("userId");
    if (userIdParam) {
      setUserId(userIdParam);
    }
  }, [location]);

  // Arama terimine göre ürünleri filtreleyen fonksiyon
  useEffect(() => {
    const filtered = products.filter((product) => {
      const name = product.name || ""; // Eğer product.name undefined ise, boş bir string kullan
      const description = product.description || ""; // Eğer product.description undefined ise, boş bir string kullan
      return (
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        description.toLowerCase().includes(searchTerm.toLowerCase())
        // Diğer aranabilir özellikler...
      );
    });
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const [processing, setProcessing] = useState(false);
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    setProcessing(true);
    e.preventDefault();

    try {
      const response = await updateUser({ id: userId, isLoggedIn: false });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error.message);
    }
  };

  const sortChange = (value) => {
    if (value === "application-deadline") {
      const newSorted = [...filteredProducts];
      newSorted.sort((a, b) => {
        return (
          new Date(a.applicationDeadline) - new Date(b.applicationDeadline)
        );
      });
      setFilteredProducts(newSorted);
    } else if (value === "low-to-high") {
      const newSorted = [...filteredProducts];
      newSorted.sort((a, b) => {
        return a.price - b.price;
      });
      setFilteredProducts(newSorted);
    } else if (value === "high-to-low") {
      const newSorted = [...filteredProducts];
      newSorted.sort((a, b) => {
        return b.price - a.price;
      });
      setFilteredProducts(newSorted);
    }
  };

  return (
    <ProductsContext.Provider value={setFilteredProducts}>
      <Box
        className="fixed w-screen h-screen bg-amber-100 min-h-min"
        maxW="10xl"
        mx="auto"
        px={{
          base: "4",
          md: "8",
          lg: "12",
        }}
        py={{
          base: "6",
          md: "8",
          lg: "12",
        }}
        sx={{
          "@media (max-width: 768px)": {
            overflowY: "scroll",
          },
        }}
      >
        <form className="max-w-md mx-auto">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Arama yap..."
              required
            />
            <button
              type="button"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={(e) => {
                e.preventDefault();
                setSearchTerm(""); // Arama terimini sıfırla
                setCurrentPage(1);
              }}
            >
              Sıfırla
            </button>
          </div>
        </form>
        <Heading
          size="lg"
          mt={{
            base: "6",
            md: "10",
          }}
          mb="8"
        >
          <div className="flex items-center ">
            <ul className="flex gap-8">
              <li>
                {processing ? (
                  <div className="flex items-center justify-between">
                    <div
                      className="animate-spin inline-block border-[3px] border-current border-t-transparent rounded-full w-4 h-4 text-[#825614] text-sm"
                      role="status"
                      aria-label="loading"
                    >
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center justify-center flex-shrink-0 w-1/2 gap-5 px-6 py-2 text-lg font-medium tracking-wide text-white transition-colors duration-200 border-4 rounded-md lg:w-auto bg-neutral-950 border-neutral-950 hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900 focus:shadow-outline focus:outline-none "
                    onClick={handleLogOut}
                  >
                    Çıkış Yap
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </Heading>

        <Flex
          justify="space-between"
          align="center"
          borderWidth="3px"
          borderColor="black"
          rounded="sm"
          borderStyle="solid"
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <HStack spacing="6">
            <Text
              color={mode("gray.600", "gray.400")}
              fontWeight="medium"
              fontSize="sm"
            >
              Filter by
            </Text>
            <SimpleGrid display="inline-grid" spacing="4" columns={5}>
              <LangFilterPopover />
              <CountryFilterPopover />
              <PriceFilterPopover />
              <CheckboxFilterPopover />
              <DurationFilterPopover />
            </SimpleGrid>
          </HStack>

          <HStack flexShrink={0}>
            <Text
              as="label"
              htmlFor="sort-by"
              color={mode("gray.600", "gray.400")}
              fontWeight="medium"
              fontSize="sm"
              whiteSpace="nowrap"
            >
              Sort by
            </Text>
            <SortbySelect onChange={sortChange} />
          </HStack>
        </Flex>

        {/* <MobileFilter /> */}

        <Applications apps={currentPosts} page={page} />
        <ReactPaginate
          onPageChange={paginate}
          pageCount={Math.ceil(filteredProducts.length / postsPerPage)}
          previousLabel={"Prev"}
          nextLabel={"Next"}
          containerClassName={"pagination"}
          pageLinkClassName={"page-number"}
          previousLinkClassName={"page-number"}
          nextLinkClassName={"page-number"}
          activeLinkClassName={"active"}
        />
      </Box>
    </ProductsContext.Provider>
  );
}

export default App;
