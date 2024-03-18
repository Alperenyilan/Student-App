import { Box, SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "./ProductCard";

export const Applications = (props) => {
  return (
    <Box
      mt="6"
      borderWidth="3px"
      minH="480px"
      borderColor="black"
      rounded="xl"
      borderStyle="solid"
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
    >
      <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          lg: 3,
        }}
        gap={{
          base: "8",
          lg: "12",
        }}
      >
        {props.apps.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
