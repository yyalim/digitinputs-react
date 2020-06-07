import React, { useState, useEffect, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Digit } from '../Digit/Digit'

export function DigitInputs({ className, onDigitsChange, hidden, children }) {
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

  return <div className={className}>{digits}</div>
}

DigitInputs.propTypes = {
  onDigitsChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  hidden: PropTypes.bool,
  children: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf([Digit])
    })
  )
}
