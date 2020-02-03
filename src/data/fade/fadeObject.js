import Immutable from 'immutable'

const fade = Immutable.Record({
  entry: true,
  direction: 'left',
  duration: '2s',
  opacityLimit: 100
})

export default fade
