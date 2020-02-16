import Immutable from 'immutable'

const pulse = Immutable.Record({
  id: '',
  type: 'pulse',
  enlargement: 1,
  duration: '1s',
  timing: 'ease',
  delay: '0s',
  iterations: '1',
  direction: 'normal',
  fillMode: 'both',
  playState: 'running'
})

export default pulse
