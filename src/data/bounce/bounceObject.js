import Immutable from 'immutable'

const bounce = Immutable.Record({
  id: '',
  type: 'bounce',
  bounces: 3,
  limit: null,
  origin: 'center bottom',
  entry: null,
  entryDirection: null
})

export default bounce
