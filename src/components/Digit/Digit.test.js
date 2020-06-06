import React from 'react'
import { Digit } from './Digit'
import { shallow, mount } from 'enzyme'

describe('Digit test suite', () => {
  it('should be foucesed if focuesed props is true', () => {
    mount(<Digit focused index={0} />)
    const focusedElement = document.activeElement

    expect(focusedElement).toEqual(
      expect.objectContaining({ name: 'digit-index-0' })
    )
  })

  it('should invoke function passed to onDigitChange when value changed', () => {
    const onDigitChangeMock = jest.fn()
    const event = {
      target: { value: '1' }
    }

    const component = shallow(
      <Digit index={0} onDigitChange={onDigitChangeMock} />
    )

    component.find('input').simulate('change', event)

    expect(onDigitChangeMock).toBeCalledWith(0, '1')
  })

  it('should not accept non-numeric values', () => {
    // invokes preventDefault method if non-numeric value entered
    const event = {
      preventDefault: jest.fn(),
      key: 'a'
    }

    const component = shallow(<Digit index={0} />)

    component.find('input').simulate('keyPress', event)
    expect(event.preventDefault).toBeCalledWith()
  })

  it('should accept numeric values', () => {
    // does not invokes preventDefault method if non-numeric value entered
    const event = {
      preventDefault: jest.fn(),
      key: '1'
    }

    const component = shallow(<Digit index={0} />)

    component.find('input').simulate('keyPress', event)
    expect(event.preventDefault).not.toBeCalledWith()
  })

  it('should have type of text by default', () => {
    const component = shallow(<Digit />)
    const elem = component.find('input')

    expect(elem.prop('type')).toBe('text')
  })

  it('should type of password if hidden props passed', () => {
    const component = shallow(<Digit hidden />)
    const elem = component.find('input')

    expect(elem.prop('type')).toBe('password')
  })
})
