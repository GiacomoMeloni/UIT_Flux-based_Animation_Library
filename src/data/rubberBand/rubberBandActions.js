import animationDispatcher from '../animationDispatcher'
import rubberBandActionTypes from './rubberBandActionTypes'
import bounceActionTypes from '../bounce/bounceActionTypes'

const rubberBandActions = {
  newRubberBand (id, stretches, maxOffset) {
    animationDispatcher.dispatch({
      type: rubberBandActionTypes.NEW_RUBBER_BAND,
      id: id,
      stretches: stretches,
      maxOffset: maxOffset
    })
  },
  changeValue (id, key, value) {
    animationDispatcher.dispatch({
      type: bounceActionTypes.CHANGE_BOUNCE_VALUE,
      id: id,
      key: key,
      value: value
    })
  }
}

export default rubberBandActions
