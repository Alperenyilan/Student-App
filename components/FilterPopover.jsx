import {
  HStack,
  Icon,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  useColorModeValue as mode,
  usePopoverContext,
} from "@chakra-ui/react";
import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { FilterActionButtons } from "./FilterActionButtons";

export const FilterPopoverButton = (props) => {
  const { label, icon, selected } = props;
  return (
    <PopoverTrigger>
      <HStack
        justify="space-between"
        position="relative"
        as="button"
        fontSize="sm"
        borderWidth="1px"
        zIndex="11"
        rounded="lg"
        paddingStart="3"
        paddingEnd="2"
        paddingY="1.5"
        spacing="1"
        data-selected={selected || undefined}
        _expanded={{
          bg: mode("gray.100", "gray.700"),
        }}
        _selected={{
          bg: "blue.50",
          borderColor: "blue.500",
        }}
      >
        {icon && <Icon as={icon} boxSize="2" />}
        <Text fontWeight="medium">{label}</Text>
        <Icon as={HiChevronDown} fontSize="xl" color="gray.400" />
      </HStack>
    </PopoverTrigger>
  );
};
export const FilterPopoverContent = (props) => {
  const {
    header,
    children,
    onClickCancel,
    onClickApply,
    onClickReset,
    isCancelDisabled,
  } = props;
  const { onClose } = usePopoverContext();
  return (
    <PopoverContent
      _focus={{
        shadow: "none",
        outline: 0,
      }}
      _focusVisible={{
        shadow: "outline",
      }}
    >
      {header && <PopoverHeader srOnly>{header}</PopoverHeader>}
      <PopoverBody padding="6">{children}</PopoverBody>
      <PopoverFooter>
        <FilterActionButtons
          onClickCancel={() => {
            onClickCancel?.();
            onClose();
          }}
          onClickApply={() => {
            onClickApply?.();
            onClose();
          }}
          onClickReset={onClickReset}
          isCancelDisabled={isCancelDisabled}
        />
      </PopoverFooter>
    </PopoverContent>
  );
};
