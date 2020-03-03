import Immutable from 'immutable'

const bounce = Immutable.Record({
  id: '',
  type: 'bounce',
  bounces: 3,
  limit: null,
  transformOrigin: 'center bottom',
  entry: false,
  entryDirection: null,
  style: null
})

export default bounce
