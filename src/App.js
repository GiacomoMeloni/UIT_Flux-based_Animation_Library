import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getFade, getBounce } from './uit'

function App (props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.fade id='fade01' entry={true} {...props}>
          <p onClick={ () => getFade('fade01').setEntry(false) }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { getFade('fade01').direction }
          </p>
        </uit.fade>
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
