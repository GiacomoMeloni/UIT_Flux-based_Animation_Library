import Immutable from 'immutable'

const fade = Immutable.Record({
  id: '',
  entry: true,
  direction: 'left',
  duration: 2,
  opacityLimit: 100
})

export default fade
