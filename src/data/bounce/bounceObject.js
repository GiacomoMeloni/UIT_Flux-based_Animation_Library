import Immutable from 'immutable'

const bounce = Immutable.Record({
  bounces: 2,
  speeds: [1, 1],
  origin: 'center bottom'
})

export default bounce
