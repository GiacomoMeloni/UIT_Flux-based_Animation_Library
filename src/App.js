import React from 'react'
import logo from './logo.svg'
import './App.css'
import uit, { getFade } from './uit'
import fadeActions from "./data/fade/fadeActions";

function App (props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <uit.fade id="fade01" direction="right" duration={2} entry={ false } {...props}>
          <p onClick={ () => fadeActions.changeDirection('fade01', 'direction', 'down') }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { props.fade.state.direction }
          </p>
        </uit.fade>
        <uit.fade {...props}>
          { props.fade.state.direction }
        </uit.fade>
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
