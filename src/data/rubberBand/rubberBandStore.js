import { ReduceStore } from 'flux/utils'
import rubberBandActionTypes from './rubberBandActionTypes'
import rubberBand from './rubberBandObject'
import style from '../styleObject'
import animationDispatcher from '../animationDispatcher'
import Immutable from 'immutable'

class RubberBandStore extends ReduceStore {
  constructor () {
    super(animationDispatcher)
  }

  getInitialState () {
    return Immutable.OrderedMap()
  }

  reduce (state, action) {
    switch (action.type) {
      case rubberBandActionTypes.NEW_RUBBER_BAND: {
        return state.set(
          action.id,
          rubberBand({
            id: action.id,
            stretches: action.stretches,
            maxOffset: action.maxOffset,
            style: style({
              duration: action.duration,
              timing: action.timing,
              delay: action.delay,
              iterations: action.iterations,
              direction: action.direction,
              fillMode: action.fillMode,
              playState: action.playState
            })
          }))
      }

      case rubberBandActionTypes.CHANGE_RUBBER_BAND_VALUE: {
        if (state.get(action.id).has(action.key)) {
          return state.setIn([action.id, action.key], action.value)
        } else if (action.key.startsWith('style.')) {
          action.key = action.key.substr(6)

          if (state.get(action.id).style.has(action.key)) {
            return state.setIn([action.id, 'style', action.key], action.value)
          } else {
            throw Error('style of rubberBand does not have a property ' + action.key)
          }
        } else {
          throw Error('rubberBand does not have a property ' + action.key)
        }
      }

      default:
        return state
    }
  }
}

export default new RubberBandStore()
