import React, { createContext, useContext, useState, useMemo } from "react";
import { products } from "../data/_data"; // Ürünlerinizi burada import edin

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    language: "",
    country: "",
    university: [],
    // Diğer filtreleriniz...
  });

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      return (
        (!filters.language || product.language === filters.language) &&
        (!filters.country || product.country === filters.country) &&
        (!filters.university.length ||
          filters.university.includes(product.university))
      );
      // Diğer filtreleme koşullarınız...
    });
  }, [filters]);

  const updateFilters = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  return (
    <FilterContext.Provider value={{ filteredProducts, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
