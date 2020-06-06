import React from 'react'
import { DigitInputs } from './DigitInputs'
import { Digit } from '../Digit/Digit'
import { mount } from 'enzyme'

describe('DigitInputs test suite', () => {
  const onDigitsChangeMock = jest.fn()
  let wrapper, firstInput, secondInput, thirdInput

  const event = {
    target: { value: '1' }
  }

  beforeEach(() => {
    wrapper = mount(
      <DigitInputs onDigitsChange={onDigitsChangeMock}>
        <Digit />
        <Digit />
        <Digit />
      </DigitInputs>
    )

    firstInput = wrapper.find('input[name="digit-index-0"]')
    secondInput = wrapper.find('input[name="digit-index-1"]')
    thirdInput = wrapper.find('input[name="digit-index-2"]')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should invoke onDigitsChange when an digit inputted', () => {
    expect(onDigitsChangeMock).toBeCalledTimes(1)
    expect(onDigitsChangeMock).toBeCalledWith({
      asNumber: 0,
      asString: '',
      asObject: {}
    })

    firstInput.simulate('change', event)

    expect(onDigitsChangeMock).toBeCalledTimes(2)
    expect(onDigitsChangeMock).toBeCalledWith(
      expect.objectContaining({
        asNumber: 1,
        asString: '1',
        asObject: { '0': '1' }
      })
    )

    secondInput.simulate('change', event)

    expect(onDigitsChangeMock).toBeCalledTimes(3)
    expect(onDigitsChangeMock).toBeCalledWith(
      expect.objectContaining({
        asNumber: 11,
        asString: '11',
        asObject: { '0': '1', '1': '1' }
      })
    )

    thirdInput.simulate('change', event)

    expect(onDigitsChangeMock).toBeCalledTimes(4)
    expect(onDigitsChangeMock).toBeCalledWith(
      expect.objectContaining({
        asNumber: 111,
        asString: '111',
        asObject: { '0': '1', '1': '1', '2': '1' }
      })
    )
  })

  it('should allow user to delete input', () => {
    const deleteEvent = { target: { value: '' } }
    firstInput.simulate('change', event)
    secondInput.simulate('change', event)
    secondInput.simulate('change', deleteEvent)

    expect(onDigitsChangeMock).toBeCalledWith(
      expect.objectContaining({
        asNumber: 1,
        asString: '1',
        asObject: { '0': '1', '1': '' }
      })
    )
  })
})
