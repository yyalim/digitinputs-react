# digitinputs-react

> A react component for digit inputs

[![NPM](https://img.shields.io/npm/v/digitinputs-react.svg)](https://www.npmjs.com/package/digitinputs-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save digitinputs-react
```

## Usage

```jsx
import React, { Component } from 'react'

import { DigitInputs, Digit } from 'digitinputs-react'
import 'digitinputs-react/dist/index.css'

class Example extends Component {
  // ...

  handeDigitsChange(value) {
    // value.asNumber -> 123
    // value.asString -> '123'
    // value.asObject => { '0': '1', '1': '2', '2': '3'}
  }

  // ...
  render() {
    return (
      <form>
        <DigitInputs hidden={hidden} onDigitsChange={this.handleDigitsChange}>
          <Digit />
          <Digit />
          <Digit />
        </DigitInputs>
      </form>
    )
  }
}
```

## License

MIT © [yyalim](https://github.com/yyalim)
