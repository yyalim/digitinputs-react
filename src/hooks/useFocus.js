import { useEffect, useRef } from 'react'

export default function useFocus(isFocused) {
  const ref = useRef(null)

  useEffect(() => {
    isFocused && ref.current.focus()
  })

  return ref
}
