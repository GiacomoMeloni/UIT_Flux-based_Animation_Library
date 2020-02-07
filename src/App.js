import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit from './uit'

function App (props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.bounce id="bounce1" bounces={7} {...props}>
          <p onClick={ () => props.bounce.changeValue('bounces', 4) }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { props.bounce.state.bounces }
          </p>
        </uit.bounce>
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
