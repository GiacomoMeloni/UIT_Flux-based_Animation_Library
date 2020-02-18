import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getSwing, getBounce } from './uit'

function App (props) {
  const swing0101 = getSwing('swing0101')
  const bounce2 = getBounce('bounce2')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.swing id='swing0101' angulation = { 15 } swingingTimes = { 2 } iterations = {'infinite'} onClick={
          () => { swing0101.setAngulation(20) }} {...props}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { swing0101.angulation }
          </p>
        </uit.swing>
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
