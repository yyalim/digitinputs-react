import React from 'react'

import 'digitinputs-react/dist/index.css'

import ExampleOne from './components/ExampleOne'
import ExampleTwo from './components/ExampleTwo'
import GithubRibbon from './components/GithubRibbon'

const App = () => {
  return (
    <div className='example-app'>
      <GithubRibbon />
      <div className='description'>
        <h1>digitinputs-react</h1>
        <p>
          A react component for digit inputs. It might be very useful to get SMS
          codes from user on two factor authentications and in many other
          scenarios when you need get an numerical input from user digit by
          digit.
        </p>
        <p>
          <a href='https://github.com/yyalim/digitinputs-react'>Github</a>
        </p>
        <p>
          <a href='https://www.npmjs.com/package/digitinputs-react'>NPM</a>
        </p>
      </div>
      <div className='examples'>
        <h2>Examples:</h2>
        <div className='example'>
          <h3>With default styles</h3>
          <p>You can use it with default styling</p>
          <ExampleOne />
        </div>
        <div className='example'>
          <h3>Custom styles</h3>
          <p>Or you can override class names and use your own style</p>
          <ExampleTwo />
        </div>
      </div>
    </div>
  )
}

export default App
