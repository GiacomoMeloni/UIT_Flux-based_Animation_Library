import Immutable from 'immutable'

const heartbeat = Immutable.Record({
  id: '',
  type: 'heartbeat',
  beatTimes: 4,
  beatStrength: 30,
  style: null
})

export default heartbeat
