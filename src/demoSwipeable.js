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
import shortid from 'shortid'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Input from '@material-ui/core/Input'
import ListSubheader from '@material-ui/core/ListSubheader'
import { InputAdornment } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const styleProps = {
  duration: 'seconds',
  timing: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear'],
  delay: 'seconds',
  iterations: { number: [0, 100000, 1] },
  direction: ['normal', 'reverse', 'alternate', 'alternate-reverse'],
  fillMode: ['none', 'forwards', 'backwards', 'both'],
  playState: ['running', 'paused']
}

const animProps = {
  bounce: {
    bounces: { number: [0, 100000, 1] },
    limit: { number: [0, 100000, 1] },
    transformOrigin: 'string',
    entry: ['null', 'in', 'out'],
    entryDirection: ['null', 'up', 'down', 'left', 'right']
  },
  fade: {
    entry: 'boolean',
    entryDirection: ['null', 'up', 'down', 'left', 'right'],
    opacityLimit: { number: [0, 100, 1] }
  },
  flash: {
    flashingTimes: { number: [0, 100000, 1] }
  },
  pulse: {
    enlargement: { number: [0, 100000, 1] }
  },
  shake: {
    shakingTimes: { number: [0, 100000, 1] },
    shakingStrength: { number: [0, 100000, 1] }
  },
  swing: {
    angulation: { number: [0, 100000, 1] },
    swingingTimes: { number: [0, 100000, 1] }
  },
  rubberBand: {
    stretches: { number: [0, 100000, 1] },
    maxOffset: { number: [0, 100000, 1] }
  },
  tada: {
    maxScale: { number: [0, 100000.0, 0.1] },
    minScale: { number: [0, 100000.0, 0.1] },
    rotation: { number: [0, 100000, 1] }
  },
  heartbeat: {
    beatTimes: { number: [0, 100000, 1] },
    beatStrength: { number: [0, 100000, 1] }
  }
}

const selectStates = {
  bounce: Object.keys(animProps.bounce)[0],
  fade: Object.keys(animProps.fade)[0],
  flash: Object.keys(animProps.flash)[0],
  pulse: Object.keys(animProps.pulse)[0],
  shake: Object.keys(animProps.shake)[0],
  swing: Object.keys(animProps.swing)[0],
  rubberBand: Object.keys(animProps.rubberBand)[0],
  tada: Object.keys(animProps.tada)[0],
  heartbeat: Object.keys(animProps.heartbeat)[0]
}

function DemoDataFields (props) {
  const id = props.id
  const anim = props[id]
  const selectState = selectStates[id]
  // adding this useState retrigger a rerender when modifying selectStates entries
  // eslint-disable-next-line no-unused-vars
  const [_selectState, _setSelectState] = useState(null)

  let marginTop
  if (Object.hasOwnProperty.call(animProps[id], selectState)) {
    marginTop = animProps[id][selectState] === 'boolean' ? '28px' : '20px'
  }

  return (
    <div style={{ marginTop: marginTop }}>
      <FormControl>
        <InputLabel htmlFor="grouped-select">Properties</InputLabel>
        <Select
          value={selectState}
          input={<Input id="grouped-select" />}
          onChange={(e) => {
            selectStates[id] = e.target.value; _setSelectState(e.target.value)
          }}
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
      <ParseInputField value={selectState} style={{ marginLeft: '10px', width: '50%' }} anim={anim} id={id}/>
    </div>
  )
}

function ParseInputField (props) {
  const value = props.value
  const id = props.id
  let data, source
  if (Object.hasOwnProperty.call(styleProps, value)) {
    data = props.anim.style
    source = styleProps
  } else {
    data = props.anim
    source = animProps[id]
  }
  const [_string, _setString] = useState({})

  if (source[value] === 'string') {
    if (!Object.hasOwnProperty.call(_string, id + value)) {
      _setString({ ..._string, [id + value]: data[value] })
    }

    return (
      <TextField
        id="outlined-number"
        label="String"
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        style={props.style}
        value={_string[id + value]}
        onChange={(e) => {
          if (e.target.value !== '') _setString({ ..._string, [id + value]: e.target.value })
        }}
        onBlur={(e) => {
          if (e.target.value !== '') props.anim['set' + capitalizeFirstLetter(value)](e.target.value)
        }}
      />
    )
  } else if (source[value] === 'seconds') {
    return (
      <TextField
        id="outlined-number"
        label="Number"
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          endAdornment: <InputAdornment position="end">s</InputAdornment>
        }}
        style={props.style}
        variant="outlined"
        value={data[value] === null ? 1 : data[value]}
        onChange={(e) => {
          if (e.target.value !== '') props.anim['set' + capitalizeFirstLetter(value)](e.target.value)
        }}
      />
    )
  } else if (source[value] === 'boolean') {
    return (
      <Checkbox
        color="default"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
        style={{ marginTop: '8px' }}
        checked={data[value]}
        onChange={(e) => {
          data['set' + capitalizeFirstLetter(value)](e.target.checked)
        }}
      />
    )
  } else if (!Array.isArray(source[value]) && typeof source[value] === 'object') {
    return (
      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        inputProps={{ min: source[value].number[0], max: source[value].number[1], step: source[value].number[2] }}
        InputLabelProps={{ shrink: true }}
        variant="outlined"
        style={props.style}
        value={data[value] === null ? 1 : data[value]}
        onChange={(e) => {
          if (e.target.value !== '') props.anim['set' + capitalizeFirstLetter(value)](e.target.value)
        }}
      />
    )
  } else if (Array.isArray(source[value])) {
    return (
      <FormControl style={props.style}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          variant="outlined"
          value={data[value] === null ? 'null' : data[value]}
          onChange={(e) => {
            props.anim['set' + capitalizeFirstLetter(value)](e.target.value === 'null' ? null : e.target.value)
          }}
        >
          {source[value].map(val => (
            <MenuItem key={shortid.generate()} value={val}>{val}</MenuItem>
          ))}
        </Select>
      </FormControl>
    )
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

  const classes = useStyles()
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  const handleStepChange = step => {
    setActiveStep(step)
  }

  const animations = [
    <div key={shortid.generate()} className={classes.content}>
      <fal.bounce id="bounce" {...props}>
        <p>Bounce</p>
      </fal.bounce>
      <Button variant="contained" onClick={() => { bounce.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="bounce" bounce={bounce}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.fade id="fade" {...props}>
        <p>Fade</p>
      </fal.fade>
      <Button variant="contained" onClick={() => { fade.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="fade" fade={fade}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.flash id="flash" {...props}>
        <p>Flash</p>
      </fal.flash>
      <Button variant="contained" onClick={() => { flash.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="flash" flash={flash}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.pulse id="pulse" {...props}>
        <p>Pulse</p>
      </fal.pulse>
      <Button variant="contained" onClick={() => { pulse.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="pulse" pulse={pulse}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.shake id="shake" {...props}>
        <p>Shake</p>
      </fal.shake>
      <Button variant="contained" onClick={() => { shake.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="shake" shake={shake}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.swing id="swing" {...props}>
        <p>Swing</p>
      </fal.swing>
      <Button variant="contained" onClick={() => { swing.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="swing" swing={swing}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.rubberBand id="rubberBand" {...props}>
        <p>RubberBand</p>
      </fal.rubberBand>
      <Button variant="contained" onClick={() => { rubberBand.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="rubberBand" rubberBand={rubberBand}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.tada id="tada" {...props}>
        <p>Tada</p>
      </fal.tada>
      <Button variant="contained" onClick={() => { tada.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="tada" tada={tada}/>
    </div>,
    <div key={shortid.generate()} className={classes.content}>
      <fal.heartbeat id="heartbeat" {...props}>
        <p>Heartbeat</p>
      </fal.heartbeat>
      <Button variant="contained" onClick={() => { heartbeat.replay() }} color="primary" size="large">
        Animate Me
      </Button>
      <br/>
      <DemoDataFields id="heartbeat" heartbeat={heartbeat}/>
    </div>
  ]

  return (
    <div className={classes.root}>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        disableLazyLoading={true}
      >
        {animations.map(anim => (
          anim
        ))}
      </SwipeableViews>
      <MobileStepper
        steps={animations.length}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === animations.length - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    textAlign: 'center',
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '-334px 0 0 -200px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4)
  },
  content: {
    height: 180,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    paddingTop: 220
  }
}))

export default Demo
