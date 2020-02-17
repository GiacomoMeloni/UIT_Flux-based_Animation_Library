import Immutable from 'immutable'

const style = Immutable.Record({
  duration: '1s',
  timing: 'ease',
  delay: '0s',
  iterations: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running'
})

export default style
