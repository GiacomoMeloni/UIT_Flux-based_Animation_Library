import Immutable from 'immutable'

const flash = Immutable.Record({
  id: '',
  type: 'flash',
  flashingTimes: 2,
  duration: '1s',
  timing: 'ease',
  delay: '0s',
  iterations: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running'
})

export default flash
