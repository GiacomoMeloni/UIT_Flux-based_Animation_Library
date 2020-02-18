import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getHeartbeat, getBounce } from './uit'

function App (props) {
  const heart101 = getHeartbeat('heart101')
  const bounce2 = getBounce('bounce2')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.heartbeat id='heart101' beatTimes = {4} beatStrength = {50} iterations = {'infinite'} onClick={
          () => { heart101.setBeatTimes(8) }} {...props}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { heart101.beatTimes }
          </p>
        </uit.heartbeat>
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
