import { Box, Popover } from "@chakra-ui/react";
import React from "react";
import { CheckboxFilter } from "./CheckboxFilter";
import { PriceRangePicker } from "./PriceRangePicker";
import { formatPrice } from "./PriceTag";
import { SizePicker } from "./SizePicker";
import { FilterPopoverButton, FilterPopoverContent } from "./FilterPopover";
import { useFilterState } from "./useFilterState";
import {
  countryFilter,
  durationFilter,
  languageFilter,
  priceFilter,
  universityFilter,
} from "../data/_data";
import { useContext } from "react";
import { ProductsContext } from "../src/App";
import { products } from "../data/_data";
import { useFilter } from "../components/FilterContext";

export const LangFilterPopover = () => {
  const { updateFilters } = useFilter();
  const handleApply = (selectedLanguage) => {
    updateFilters("language", selectedLanguage);
  };

  const setFilteredProducts = useContext(ProductsContext);
  const state = useFilterState({
    onSubmit: (v) => {
      setFilteredProducts(products);
      setFilteredProducts((prev) => {
        return prev.filter((product) => product.language === v);
      });
    },
    onReset: () => {
      // Filtreleri sıfırlama işlemi
      setFilteredProducts(products);
    },
  });

  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Language" />
      <FilterPopoverContent
        onClickReset={state.onReset}
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <SizePicker
          hideLabel
          value={state.value}
          onChange={state.onChange}
          options={languageFilter.options}
        />
      </FilterPopoverContent>
    </Popover>
  );
};
export const CountryFilterPopover = () => {
  const setFilteredProducts = useContext(ProductsContext);
  const state = useFilterState({
    onSubmit: (v) => {
      setFilteredProducts(products);
      setFilteredProducts((prev) => {
        return prev.filter((product) => product.country === v);
      });
    },
    onReset: () => {
      // Filtreleri sıfırlama işlemi
      setFilteredProducts(products);
    },
  });

  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Country" />
      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <SizePicker
          hideLabel
          value={state.value}
          onChange={state.onChange}
          options={countryFilter.options}
        />
      </FilterPopoverContent>
    </Popover>
  );
};
export const DurationFilterPopover = () => {
  const setFilteredProducts = useContext(ProductsContext);

  const state = useFilterState({
    onSubmit: (v) => {
      setFilteredProducts(products);
      setFilteredProducts((prev) => {
        return prev.filter((product) => product.duration === v);
      });
    },
  });
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Duration" />
      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <SizePicker
          hideLabel
          value={state.value}
          onChange={state.onChange}
          options={durationFilter.options}
        />
      </FilterPopoverContent>
    </Popover>
  );
};
export const PriceFilterPopover = () => {
  const setFilteredProducts = useContext(ProductsContext);

  const state = useFilterState({
    defaultValue: priceFilter.defaultValue,
    onSubmit: (v) => {
      setFilteredProducts(products);
      setFilteredProducts((prev) => {
        return prev.filter(
          (product) => product.price >= v[0] && product.price <= v[1]
        );
      });
    },
    onReset: () => {
      // Filtreleri sıfırlama işlemi
      setFilteredProducts(products);
    },
  });
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="Price" />

      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <Box px="2" pt="2">
          <PriceRangePicker
            step={10}
            min={priceFilter.min}
            max={priceFilter.max}
            value={state.value}
            onChange={state.onChange}
          />
          <Box as="output" mt="2" fontSize="sm">
            {state.value?.map((v) => formatPrice(v)).join(" — ")}
          </Box>
        </Box>
      </FilterPopoverContent>
    </Popover>
  );
};
export const CheckboxFilterPopover = () => {
  const setFilteredProducts = useContext(ProductsContext);

  const state = useFilterState({
    defaultValue: [],
    onSubmit: (v) => {
      setFilteredProducts(products);
      setFilteredProducts((prev) => {
        return prev.filter((product) => v.includes(product.university));
      });
    },
  });
  return (
    <Popover placement="bottom-start">
      <FilterPopoverButton label="University" />
      <FilterPopoverContent
        isCancelDisabled={!state.canCancel}
        onClickApply={state.onSubmit}
        onClickCancel={state.onReset}
      >
        <CheckboxFilter
          hideLabel
          value={state.value}
          onChange={(v) => state.onChange(v)}
          options={universityFilter.options}
        />
      </FilterPopoverContent>
    </Popover>
  );
};
