import React, { useState, useEffect, Children, cloneElement } from 'react'

export function DigitInputs({ onDigitsChange, hidden, children }) {
  const [values, setValues] = useState({})
  const [focusedIndex, setFocusedIndex] = useState({})

  useEffect(() => {
    const asString = Object.values(values).join('')
    const asNumber = Number(asString)
    onDigitsChange({
      asNumber,
      asString,
      asObject: values
    })
  }, [values])

  const handleDigitChange = (index, value) => {
    setValues((prevState) => ({
      ...prevState,
      [index]: value
    }))

    setFocusedIndex(/[0-9]/.test(value) ? index + 1 : null)
  }

  const digits = Children.map(children, (digit, index) =>
    cloneElement(digit, {
      index: index,
      value: values[index] || null,
      focused: index === focusedIndex,
      hidden: hidden || false,
      onDigitChange: handleDigitChange
    })
  )

  return <div className='digit-inputs'>{digits}</div>
}
