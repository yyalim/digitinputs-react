import React, { useState } from 'react'
import { DigitInputs, Digit } from 'digitinputs-react'
import './ExampleTwo.css'

export default function ExampleTwo() {
  const [valueAsString, setValueAsString] = useState('')
  const [valueAsNumber, setValueAsNumber] = useState(null)
  const [valueAsObject, setValueAsObject] = useState({})
  const [hidden, setHidden] = useState(false)

  const handleDigitInputsChange = (value) => {
    setValueAsObject(value.asObject)
    setValueAsString(value.asString)
    setValueAsNumber(value.asNumber)
  }

  const handleCheckChange = (event) => {
    setHidden(event.target.checked)
  }

  return (
    <div className='example-one'>
      <form autoComplete='new-password'>
        <div className='input-field'>
          <label>Please enter the code</label>
          <DigitInputs
            className='custom-digitinputs'
            hidden={hidden}
            onDigitsChange={handleDigitInputsChange}
          >
            <Digit className='digit-one' />
            <Digit className='digit-two' />
            <Digit className='digit-three' />
            <Digit className='digit-four' />
            <Digit className='digit-five' />
            <Digit className='digit-six' />
          </DigitInputs>
        </div>
        <div className='input-field'>
          <label htmlFor='isHidden'>
            Hide
            <input
              type='checkbox'
              name='isHidden'
              checked={hidden}
              onChange={handleCheckChange}
            />
          </label>
        </div>
      </form>
      <p>Value as string: {valueAsString}</p>
      <p>Value as number: {valueAsNumber}</p>
      <p>value as Object: {JSON.stringify(valueAsObject)}</p>
    </div>
  )
}
