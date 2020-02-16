import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getFade, getBounce, getFlash } from './uit'

function App (props) {
  const flash01 = getFlash('flash01')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.flash id='flash01' flashingTimes={4} {...props}>
          <p onClick={ () => flash01.setFlashingTimes(6) }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { flash01.flashingTimes }
          </p>
        </uit.flash>
        <uit.bounce id="bounce2" bounces={2} {...props}>
          Ciao sono gustavo
        </uit.bounce>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
