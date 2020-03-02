import React from 'react'
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
      <fal.bounce id="bounce" key={shortid.generate()}
        onClick={() => { bounce.replay() }}
        {...props}>
        <p>Bounce</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.bounce>,
      <fal.fade id="fade" key={shortid.generate()}
        onClick={() => { fade.replay() }}
        {...props}>
        <p>Fade</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.fade>,
      <fal.flash id="flash" key={shortid.generate()}
        onClick={() => { flash.replay(); console.log(flash.getKeyframes()) }}
        {...props}>
        <p>Flash</p>
        <Button variant="contained" color="primary" size="large">Animate Me</Button>
      </fal.flash>
    ],
    [
      <fal.pulse id="pulse" key={shortid.generate()}
        onClick={() => { pulse.replay(); console.log(pulse.getKeyframes()) }}
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
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '800px',
      height: '300px',
      margin: '-150px 0 0 -400px'
    }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {rows.map(row => (
              <TableRow key={shortid.generate()}>
                {row.map(cell => (
                  <TableCell key={shortid.generate()} align="center">{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Demo
