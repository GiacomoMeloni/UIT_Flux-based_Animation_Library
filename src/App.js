import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getShake, getBounce } from './uit'

function App (props) {
  const shake0101 = getShake('shake0101')
  const bounce2 = getBounce('bounce2')

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.shake id='shake0101' shakingTimes={ 3 } shakingStrength={ 15 } iterations = {'infinite'} onClick={
          () => { shake0101.setShakingStrength(75) }} {...props}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { shake0101.shakingTimes }
          </p>
        </uit.shake>
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
