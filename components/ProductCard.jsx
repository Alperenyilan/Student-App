"use client";
import { HStack, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import * as React from "react";
import { PriceTag } from "./PriceTag";

export const ProductCard = (props) => {
  const { product } = props;
  return (
    <Stack spacing="4">
      <Stack border="1px" borderRadius="md" padding="3" spacing="1">
        <HStack justifyContent="space-between">
          <Text
            color={useColorModeValue("black", "white")}
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            {product.name}
          </Text>
          <PriceTag
            currency={product.currency}
            price={product.price}
            priceProps={{
              fontSize: "sm",
              fontWeight: "semibold",
              color: useColorModeValue("black", "white"),
            }}
          />
        </HStack>
        <HStack justifyContent="space-between">
          <Text
            color={useColorModeValue("black", "white")}
            fontSize="sm"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            {product.university}
          </Text>
          <Text>{product.language}</Text>
        </HStack>
        <HStack justifyContent="space-between">
          <Text
            color={useColorModeValue("black", "white")}
            fontSize="sm"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            {product.country}
          </Text>
          <Text>{product.duration}</Text>
        </HStack>
        <HStack justifyContent="center">
          <Text
            color={useColorModeValue("black", "white")}
            fontSize="sm"
            letterSpacing="wider"
            textTransform="uppercase"
          >
            {product.applicationDeadline}
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
