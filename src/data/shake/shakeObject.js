import Immutable from 'immutable'

const shake = Immutable.Record({
  id: '',
  type: 'shake',
  shakingTimes: 2,
  shakingStrength: 10,
  style: null
})

export default shake
