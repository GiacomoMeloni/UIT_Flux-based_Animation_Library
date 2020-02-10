import Immutable from 'immutable'

const bounce = Immutable.Record({
  id: '',
  type: 'bounce',
  bounces: 3,
  topLimit: 0,
  origin: 'center bottom',
  entry: null,
  entryDirection: null
})

export default bounce
