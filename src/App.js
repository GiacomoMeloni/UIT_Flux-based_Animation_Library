import React from 'react'
import logo from './logo.svg'
import './App.css'

function App (props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={ () => props.bounce.changeValue('bounces', 4) }>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          { props.bounce.state.bounces }
        </p>
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
