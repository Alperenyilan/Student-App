import { Button, HStack } from "@chakra-ui/react";
import React from "react";

export const FilterActionButtons = (props) => {
  const { onClickApply, onClickCancel, isCancelDisabled, onClickReset } = props;
  return (
    <HStack spacing="2" justify="space-between">
      <Button
        size="sm"
        variant="ghost"
        onClick={onClickCancel}
        isDisabled={isCancelDisabled}
      >
        Cancel
      </Button>
      <Button size="sm" colorScheme="blue" onClick={onClickApply}>
        Save
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={onClickReset}
        isDisabled={isCancelDisabled}
      >
        Reset
      </Button>
    </HStack>
  );
};
