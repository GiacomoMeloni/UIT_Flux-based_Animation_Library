import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getFade, getBounce } from './uit'

function App (props) {
  const fade01 = getFade('fade01')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.fade id='fade01' direction={'down'} opacityLimit={ 50 } iterations={'3'} {...props}>
          <p onClick={ () => fade01.setDuration('4s') }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { getFade('fade01').opacityLimit }
          </p>
        </uit.fade>
        <uit.bounce entry={'in'} id="bounce2" bounces={2} limit={2} {...props}>
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
