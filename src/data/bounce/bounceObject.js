import Immutable from 'immutable'

const bounce = Immutable.Record({
  id: '',
  type: 'bounce',
  bounces: 3,
  topLimit: 0,
  origin: 'center bottom'
})

export default bounce
