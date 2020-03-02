import React from 'react'
import logo from './logo.svg'
import './App.css'
import fal, { getFade, getBounce, getRubberBand } from './fal'

function App (props) {
  const fade01 = getFade('fade01')
  const bounce2 = getBounce('bounce2')
  const rubberBand1 = getRubberBand('rubberBand1')
  console.log(fade01.getKeyframes())

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <fal.fade id='fade01' direction={'down'} opacityLimit={ 80 } iterations={'infinite'}{...props}>
          <p onClick={ () => fade01.setOpacityLimit(100) }>
            Edit <code>src/App.js</code> and save to reload.
            <br/>
            { getFade('fade01').opacityLimit }
          </p>
        </fal.fade>
        <fal.bounce entry={'in'} id="bounce2" bounces={2} limit={2} onClick={
          () => { bounce2.setIterations('infinite') }} {...props}
        >
          Ciao sono gustavo
        </fal.bounce>
        <fal.rubberBand id="rubberBand1" stretches={4} maxOffset={25} {...props} onClick ={
          () => { rubberBand1.replay() }
        }>
          Miiii sono RUBBER
        </fal.rubberBand>
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
