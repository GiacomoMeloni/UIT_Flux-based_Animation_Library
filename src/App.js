import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getPulse, getBounce, getFlash } from './uit'

function App (props) {
  const pulse01 = getPulse('pulse01')
  const bounce2 = getBounce('bounce2')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.pulse id='pulse01' enlargement={ 10 } iterations={'infinite'}{...props}>
          <p onClick={ () => pulse01.setEnlargement(50) }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { pulse01.enlargement }
          </p>
        </uit.pulse>
        <uit.bounce entry={'in'} id="bounce2" bounces={2} limit={2} onClick={
          () => { bounce2.setIterations('infinite') }} {...props}
        >
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
