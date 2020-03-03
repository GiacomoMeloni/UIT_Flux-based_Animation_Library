import Immutable from 'immutable'

const bounce = Immutable.Record({
  id: '',
  type: 'bounce',
  bounces: 3,
  limit: null,
  transformOrigin: 'center bottom',
  entry: null,
  entryDirection: null,
  style: null
})

export default bounce
