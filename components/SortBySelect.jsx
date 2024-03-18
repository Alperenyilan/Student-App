import { Select, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
const sortByOptions = {
  defaultValue: 'Application Deadline',
  options: [
    {
      label: 'Application Deadline',
      value: 'application-deadline',
    },
    {
      label: 'Price: Low to High',
      value: 'low-to-high',
    },
    {
      label: 'Price: High to Low',
      value: 'high-to-low',
    },
  ],
}

export const SortbySelect = (props) => (
  <Select
    size="sm"
    aria-label="Sort by"
    defaultValue={sortByOptions.defaultValue}
    focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
    rounded="md"
    {...props}
    onChange={(e) => {
      props.onChange(e.target.value)
    }}
  >
    {sortByOptions.options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </Select>
)
