import React, { memo } from 'react'
import useFocus from '../../hooks/useFocus'
import { REGEXS, KEY_CODES } from '../../utils/constants'
import styles from './Digit.module.css'
import PropTypes from 'prop-types'

function areEqual(prevProps, nextProps) {
  return (
    prevProps.value === nextProps.value &&
    prevProps.focused === nextProps.focused
  )
}

export const Digit = memo(
  ({
    className,
    index,
    value,
    onDigitChange,
    changeFocus,
    focused,
    hidden
  }) => {
    const digitRef = useFocus(focused)

    const handleChange = (event) => {
      onDigitChange(index, event.target.value)
    }

    const handleKeyUpPress = (event) => {
      const { ARROW_LEFT, ARROW_RIGHT } = KEY_CODES

      if ([ARROW_LEFT, ARROW_RIGHT].includes(event.keyCode)) {
        changeFocus(event.keyCode)
      }

      if (!REGEXS.DIGITS.test(event.key)) {
        event.preventDefault()
      }
    }

    const handleFocus = (event) => {
      event.target.setSelectionRange(0, 1)
    }

    return (
      <input
        className={className || styles.digit}
        name={`digit-index-${index}`}
        type={hidden ? 'password' : 'text'}
        autoComplete='off'
        value={value || ''}
        ref={digitRef}
        maxLength={1}
        onChange={handleChange}
        pattern='[0-9]*'
        inputMode='tel'
        onKeyPress={handleKeyUpPress}
        onKeyUp={handleKeyUpPress}
        onFocus={handleFocus}
      />
    )
  },
  areEqual
)

Digit.propTypes = {
  className: PropTypes.string
}
