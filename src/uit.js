import getAnimData from './viewInterface'
import bounce, {
  setBounces,
  setEntry as setBounceEntry,
  setEntryDirection as setBounceEntryDirection,
  setLimit,
  setTransformOrigin
} from './components/attention_seekers/bounce'
import fade, {
  setEntry as setFadeEntry,
  setEntryDirection as setFadeEntryDirection,
  setOpacityLimit
} from './components/attention_seekers/fade'
import flash, { setFlashingTimes } from './components/attention_seekers/flash'
import pulse, { setEnlargement } from './components/attention_seekers/pulse'
import shake, { setShakingStrength, setShakingTimes } from './components/attention_seekers/shake'
import swing, { setAngulation, setSwingingTimes } from './components/attention_seekers/swing'
import rubberBand, { setMaxOffset, setStretches } from './components/attention_seekers/rubberBand'
import tada, { setMaxScale, setMinScale, setRotation } from './components/attention_seekers/tada'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import flashObject from './data/flash/flashObject'
import pulseObject from './data/pulse/pulseObject'
import shakeObject from './data/shake/shakeObject'
import swingObject from './data/swing/swingObject'
import rubberBandObject from './data/rubberBand/rubberBandObject'
import tadaObject from './data/tada/tadaObject'

const uit = {
  bounce: bounce,
  fade: fade,
  flash: flash,
  pulse: pulse,
  shake: shake,
  swing: swing,
  rubberBand: rubberBand,
  tada: tada
}

export function getBounce (id) {
  const retObject = {
    ...getAnimData('bounce', id, bounceObject),
    setBounces,
    setLimit,
    setTransformOrigin
  }
  retObject.setEntry = setBounceEntry
  retObject.setEntryDirection = setBounceEntryDirection

  return retObject
}

export function getFade (id) {
  const retObject = {
    ...getAnimData('fade', id, fadeObject),
    setFadeEntry,
    setFadeEntryDirection,
    setOpacityLimit
  }

  retObject.setEntry = setFadeEntry
  retObject.setEntryDirection = setFadeEntryDirection

  return retObject
}

export function getFlash (id) {
  return {
    ...getAnimData('flash', id, flashObject),
    setFlashingTimes
  }
}

export function getPulse (id) {
  return {
    ...getAnimData('pulse', id, pulseObject),
    setEnlargement
  }
}

export function getShake (id) {
  return {
    ...getAnimData('shake', id, shakeObject),
    setShakingTimes,
    setShakingStrength
  }
}

export function getSwing (id) {
  return {
    ...getAnimData('swing', id, swingObject),
    setAngulation,
    setSwingingTimes
  }
}

export function getRubberBand (id) {
  return {
    ...getAnimData('rubberBand', id, rubberBandObject),
    setStretches,
    setMaxOffset
  }
}

export function getTada (id) {
  return {
    ...getAnimData('tada', id, tadaObject),
    setMaxScale,
    setMinScale,
    setRotation
  }
}

export default uit
