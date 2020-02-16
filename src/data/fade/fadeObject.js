import Immutable from 'immutable'

const fade = Immutable.Record({
  id: '',
  type: 'fade',
  entry: true,
  entryDirection: 'left',
  opacityLimit: 100
})

export default fade
