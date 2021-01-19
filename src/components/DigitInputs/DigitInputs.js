import React, { useState, useEffect, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import { Digit } from '../Digit/Digit'
import { REGEXS, KEY_CODES } from '../../utils/constants'

export function DigitInputs({ className, onDigitsChange, hidden, children }) {
  const [values, setValues] = useState({})
  const [focusedIndex, setFocusedIndex] = useState(null)

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

    setFocusedIndex(REGEXS.DIGITS.test(value) ? index + 1 : null)
  }

  const changeFocus = (keyCode) => {
    if (isNaN(focusedIndex)) return
    if (keyCode === KEY_CODES.ARROW_LEFT) setFocusedIndex(focusedIndex - 1)
    if (keyCode === KEY_CODES.ARROW_RIGHT) setFocusedIndex(focusedIndex + 1)
  }

  const digits = Children.map(children, (digit, index) =>
    cloneElement(digit, {
      index: index,
      value: values[index] || null,
      focused: index === focusedIndex,
      hidden: hidden || false,
      onDigitChange: handleDigitChange,
      changeFocus
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
