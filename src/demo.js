import React, { useState } from 'react'
import './demo.css'
import fal,
{
  getBounce,
  getFade,
  getFlash,
  getPulse,
  getShake,
  getSwing,
  getRubberBand,
  getTada,
  getHeartbeat
} from './fal'
import Button from '@material-ui/core/Button'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import shortid from 'shortid'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import ListSubheader from '@material-ui/core/ListSubheader'
import Checkbox from '@material-ui/core/Checkbox'

const styleProps = {
  duration: 'seconds',
  timing: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'],
  delay: 'seconds',
  iterations: { number: [0, 100000, 1, 1] },
  direction: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
  fillMode: ['none', 'forwards', 'backwards', 'both'],
  playState: ['running', 'paused']
}

const animProps = {
  bounce: {
    bounces: { number: [0, 100000, 1, 3] },
    limit: { number: [0, 100000, 1, 30] },
    origin: 'string',
    entry: 'boolean',
    entryDirection: ['up', 'down', 'left', 'right']
  },
  fade: {
    entry: 'boolean',
    entryDirection: ['up', 'down', 'left', 'right'],
    opacityLimit: { number: [0, 100, 1, 100] }
  },
  flash: {
    flashingTimes: { number: [0, 100000, 1, 2] }
  },
  pulse: {
    enlargement: { number: [0, 100000, 1, 5] }
  },
  shake: {
    shakingTimes: { number: [0, 100000, 1, 2] },
    shakingStrength: { number: [0, 100000, 1, 10] }
  },
  swing: {
    angulation: { number: [0, 100000, 1, 15] },
    swingingTimes: { number: [0, 100000, 1, 2] }
  },
  rubberBand: {
    stretches: { number: [0, 100000, 1, 3] },
    maxOffset: { number: [0, 100000, 1, 25] }
  },
  tada: {
    maxScale: { number: [0, 100000.0, 0.1, 1.1] },
    minScale: { number: [0, 100000.0, 0.1, 0.9] },
    rotation: { number: [0, 100000, 1, 3] }
  },
  heartbeat: {
    beatTimes: { number: [0, 100000, 1, 4] },
    beatStrength: { number: [0, 100000, 1, 30] }
  }
}

function DemoDataFields (props) {
  const id = props.id
  const [selectState, setSelectState] = useState(Object.keys(animProps[id])[0])

  return (
    <div>
      <FormControl>
        <InputLabel htmlFor="grouped-select">Properties</InputLabel>
        <Select
          value={selectState}
          input={<Input id="grouped-select" />}
          onChange={(e) => { setSelectState(e.target.value) }}
        >
          <ListSubheader>{id}</ListSubheader>
          {Object.keys(animProps[id]).map(prop => (
            <MenuItem key={shortid.generate()} value={prop}>{prop}</MenuItem>
          ))}
          <ListSubheader>style</ListSubheader>
          {Object.keys(styleProps).map(prop => (
            <MenuItem key={shortid.generate()} value={prop}>{prop}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <ParseInputField value={selectState} id={id}/>
    </div>
  )
}

function ParseInputField (props) {
  const value = props.value
  const id = props.id
  const source = Object.hasOwnProperty.call(styleProps, value) ? styleProps : animProps[id]

  if (source[value] === 'string') {
    return (
      <TextField
        id="outlined-number"
        label="Number"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    )
  } else if (source[value] === 'boolean') {
    return (
      <Checkbox
        color="default"
        value="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
    )
  } else if (source[value] === 'seconds') {

  } else if (!Array.isArray(source[value]) && typeof source[value] === 'object') {
    return (
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
      />
    )
  } else if (Array.isArray(source[value])) {

  } else {
    throw Error('This demo is trash')
  }
}

function Demo (props) {
  const bounce = getBounce('bounce')
  const fade = getFade('fade')
  const flash = getFlash('flash')
  const pulse = getPulse('pulse')
  const shake = getShake('shake')
  const swing = getSwing('swing')
  const rubberBand = getRubberBand('rubberBand')
  const tada = getTada('tada')
  const heartbeat = getHeartbeat('heartbeat')

  const rows = [
    [
      <div key={shortid.generate()}>
        <fal.bounce id="bounce"
          onClick={() => { bounce.replay() }}
          {...props}>
          <p>Bounce</p>
          <Button variant="contained" color="primary" size="large">Animate Me</Button>
        </fal.bounce>
        <br/>
        <DemoDataFields id="bounce"/>
      </div>,
      <fal.fade id="fade" key={shortid.generate()}
        onClick={() => { fade.replay() }}
        {...props}>
        <p>Fade</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.fade>,
      <fal.flash id="flash" key={shortid.generate()}
        onClick={() => { flash.replay() }}
        {...props}>
        <p>Flash</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.flash>
    ],
    [
      <fal.pulse id="pulse" key={shortid.generate()}
        onClick={() => { pulse.replay() }}
        {...props}>
        <p>Pulse</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.pulse>,
      <fal.shake id="shake" key={shortid.generate()}
        onClick={() => { shake.replay() }}
        {...props}>
        <p>Shake</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.shake>,
      <fal.swing id="swing" key={shortid.generate()}
        onClick={() => { swing.replay() }}
        {...props}>
        <p>Swing</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.swing>
    ],
    [
      <fal.rubberBand id="rubberBand" key={shortid.generate()}
        onClick={() => { rubberBand.replay() }}
        {...props}>
        <p>RubberBand</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.rubberBand>,
      <fal.tada id="tada" key={shortid.generate()}
        onClick={() => { tada.replay() }}
        {...props}>
        <p>Tada</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.tada>,
      <fal.heartbeat id="heartbeat" key={shortid.generate()}
        onClick={() => { heartbeat.replay() }}
        {...props}>
        <p>Heartbeat</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.heartbeat>
    ]
  ]

  return (
    <TableContainer component={Paper}>
      <Table style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '800px',
        height: '500px',
        margin: '-250px 0 0 -400px'
      }} aria-label="simple table">
        <TableBody>
          {rows.map(row => (
            <TableRow key={shortid.generate()}>
              {row.map(cell => (
                <TableCell
                  style={{ border: '1px solid black', verticalAlign: 'bottom' }}
                  key={shortid.generate()}
                  align="center"
                >
                  {cell}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Demo
