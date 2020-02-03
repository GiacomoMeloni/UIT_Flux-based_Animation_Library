import Immutable from 'immutable'

const bounce = Immutable.Record({
  bounces: 3,
  speeds: [1, 1],
  topLimit: 0,
  origin: 'center bottom'
})

export default bounce
