import Immutable from 'immutable'

const fade = Immutable.Record({
  id: '',
  isSet: false,
  entry: true,
  direction: 'left',
  duration: '2s',
  opacityLimit: 100
})

export default fade
