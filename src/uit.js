import getAnimData from './viewInterface'
import bounce, {
  setBounces, setLimit, setTransformOrigin,
  setEntry as setBounceEntry, setEntryDirection as setBounceEntryDirection
} from './components/attention_seekers/bounce'
import fade, {
  setEntry as setFadeEntry, setEntryDirection as setFadeEntryDirection, setOpacityLimit
} from './components/attention_seekers/fade'
import rubberBand, {
  setStretches, setMaxOffset
} from './components/attention_seekers/rubberBand'
import bounceObject from './data/bounce/bounceObject'
import fadeObject from './data/fade/fadeObject'
import rubberBandObject from './data/rubberBand/rubberBandObject'

const uit = {
  bounce: bounce,
  fade: fade,
  rubberBand: rubberBand
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

export function getShake (id) {
  return getAnimData('shake', id)
}

export function getTada (id) {
  return getAnimData('tada', id)
}

export function getRubberBand (id) {
  return {
    ...getAnimData('rubberBand', id, rubberBandObject),
    setStretches,
    setMaxOffset
  }
}

export default uit
