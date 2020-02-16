import animationDispatcher from '../animationDispatcher'
import pulseActionTypes from './pulseActionTypes'

const pulseActions = {
  newPulse (id, enlargement, duration, timing, delay, iterations, direction, fillMode, playState) {
    animationDispatcher.dispatch({
      type: pulseActionTypes.NEW_PULSE,
      id: id,
      enlargement: enlargement,
      duration: duration,
      timing: timing,
      delay: delay,
      iterations: iterations,
      direction: direction,
      fillMode: fillMode,
      playState: playState
    })
  },
  changePulseValue (id, key, value) {
    animationDispatcher.dispatch({
      type: pulseActionTypes.CHANGE_PULSE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default pulseActions
