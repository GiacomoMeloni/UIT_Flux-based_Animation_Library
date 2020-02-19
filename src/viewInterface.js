import bounceStore from './data/bounce/bounceStore'
import fadeStore from './data/fade/fadeStore'
import flashStore from './data/flash/flashStore'
import pulseStore from './data/pulse/pulseStore'
import shakeStore from './data/shake/shakeStore'
import swingStore from './data/swing/swingStore'
import rubberBandStore from './data/rubberBand/rubberBandStore'
import tadaStore from './data/tada/tadaStore'

import bounceActions from './data/bounce/bounceActions'
import fadeActions from './data/fade/fadeActions'
import flashActions from './data/flash/flashActions'
import pulseActions from './data/pulse/pulseActions'
import shakeActions from './data/shake/shakeActions'
import swingActions from './data/swing/swingActions'
import rubberBandActions from './data/rubberBand/rubberBandActions'
import tadaActions from './data/tada/tadaActions'
import CSSHandlerActions from './data/CSSHandler/CSSHandlerActions'

function getAnimData (type, id, tempObject) {
  const state = objectByType(type)
  const obj = state.get(id, tempObject({ id: id })).toJS()
  const ret = {
    setDuration,
    setTiming,
    setDelay,
    setIterations,
    setDirection,
    setFillMode,
    setPlayState,
    replay
  }
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      ret[prop] = obj[prop]
    }
  }
  return ret
}

function objectByType (type) {
  switch (type) {
    case 'bounce':
      return bounceStore.getState()
    case 'fade':
      return fadeStore.getState()
    case 'flash':
      return flashStore.getState()
    case 'pulse':
      return pulseStore.getState()
    case 'shake':
      return shakeStore.getState()
    case 'swing':
      return swingStore.getState()
    case 'rubberBand':
      return rubberBandStore.getState()
    case 'tada':
      return tadaStore.getState()

    default:
      throw TypeError(`"${type}" is not an animation defined in uit`)
  }
}

function actionsByType (type) {
  switch (type) {
    case 'bounce':
      return bounceActions
    case 'fade':
      return fadeActions
    case 'flash':
      return flashActions
    case 'pulse':
      return pulseActions
    case 'shake':
      return shakeActions
    case 'swing':
      return swingActions
    case 'rubberBand':
      return rubberBandActions
    case 'tada':
      return tadaActions

    default:
      throw TypeError(`"${type}" does not have actions defined in uit`)
  }
}

function setDuration (value) {
  actionsByType(this.type).changeValue(this.id, 'style.duration', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationDuration', value)
}

function setTiming (value) {
  actionsByType(this.type).changeValue(this.id, 'style.timing', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationTimingFunction', value)
}

function setDelay (value) {
  actionsByType(this.type).changeValue(this.id, 'style.delay', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationDelay', value)
}

function setIterations (value) {
  actionsByType(this.type).changeValue(this.id, 'style.iterations', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationIterationCount', value)
}

function setDirection (value) {
  actionsByType(this.type).changeValue(this.id, 'style.direction', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationDirection', value)
}

function setFillMode (value) {
  actionsByType(this.type).changeValue(this.id, 'style.fillMode', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationFillMode', value)
}

function setPlayState (value) {
  actionsByType(this.type).changeValue(this.id, 'style.playState', value)
  CSSHandlerActions.updateStyleRule(this.id, 'animationPlayState', value)
}

function replay () {
  CSSHandlerActions.replayAnimation(this.id)
}

export default getAnimData
