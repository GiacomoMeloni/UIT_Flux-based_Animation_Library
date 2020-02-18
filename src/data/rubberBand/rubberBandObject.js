import Immutable from 'immutable'

const rubberBand = Immutable.Record({
  id: '',
  type: 'rubberBand',
  stretches: 3,
  maxOffset: 25,
  style: null
})

export default rubberBand
