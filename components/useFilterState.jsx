import { useState } from 'react'
export function useFilterState(props) {
  const { defaultValue, onSubmit } = props
  const [state, setState] = useState(defaultValue)
  return {
    canCancel: defaultValue !== state,
    value: state,
    onChange: setState,
    onReset() {
      setState(defaultValue)
    },
    onSubmit() {
      onSubmit?.(state)
    },
  }
}
