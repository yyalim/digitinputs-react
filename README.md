# digitinputs-react
[![NPM](https://img.shields.io/npm/v/digitinputs-react.svg)](https://www.npmjs.com/package/digitinputs-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A react component for digit inputs. It might be very useful to get SMS codes from user on two factor authentications and in many other scenarios when you need get an numerical input from user digit by digit.

Visit [homepage](https://yyalim.github.io/digitinputs-react/) to see examples.

## Install

```bash
npm install --save digitinputs-react
```

## Usage 

Pass a function with single paramater to ```onDigitsChange``` props to get values. Digits lenght depends on how many ```Digit``` component passed as child. You can switch between ```text``` & ```password``` inputs by using ```hidden``` switch prop.

```jsx
import React, { Component } from 'react'

import { DigitInputs, Digit } from 'digitinputs-react'
import 'digitinputs-react/dist/index.css'

class Example extends Component {
  // ...

  handleDigitsChange(value) {
    value.asNumber // -> 123
    value.asString // -> '123'
    value.asObject //-> { '0': '1', '1': '2', '2': '3'}
  }

  // ...
  render() {
    return (
      <form>
        <DigitInputs hidden onDigitsChange={this.handleDigitsChange}>
          <Digit />
          <Digit />
          <Digit />
        </DigitInputs>
      </form>
    )
  }
}
```

And you can pass custom ```className``` to override default styles on ```DigitInputs``` & ```Digit``` components

```jsx
function Example() {
  return (
    <DigitInputs className="custom-digitinputs">
      <Digit className="digit-one" />
      ...
    </DigitInputs>
  )
}
```

## License

MIT © [yyalim](https://github.com/yyalim)
