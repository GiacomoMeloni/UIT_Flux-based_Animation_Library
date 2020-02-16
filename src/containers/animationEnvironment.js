import React from 'react'
import { Container } from 'flux/utils'
import bounceActions from '../data/bounce/bounceActions'
import bounceStore from '../data/bounce/bounceStore'
import fadeStore from '../data/fade/fadeStore'
import fadeActions from '../data/fade/fadeActions'
import flashStore from '../data/flash/flashStore'
import flashActions from '../data/flash/flashActions'
import pulseStore from '../data/pulse/pulseStore'
import pulseActions from '../data/pulse/pulseActions'

import CSSHandlerActions from '../data/CSSHandler/CSSHandlerActions'
import CSSHandlerStore from '../data/CSSHandler/CSSHandlerStore'
// import '../animate.css'
import '../test.css'


function getStores () {
  return [
    bounceStore,
    fadeStore,
    flashStore,
    pulseStore,
    CSSHandlerStore
  ]
}

function getState () {
  return {
    bounce: {
      state: bounceStore.getState(),
      changeBounceValue: bounceActions.changeBounceValue
    },
    fade: {
      state: fadeStore.getState(),
      newFade: fadeActions.newFade,
      changeFadeValue: fadeActions.changeFadeValue
    },
    flash: {
      state: flashStore.getState(),
      newFlash: flashActions.newFlash,
      changeFlashValue: flashActions.changeFlashValue
    },
    pulse: {
      state: pulseStore.getState(),
      newPulse: pulseActions.newPulse,
      changePulseValue: pulseActions.changePulseValue
    },
    cssHandler: {
      state: CSSHandlerStore.getState(),
      insertRule: CSSHandlerActions.insertRule
    }
  }
}

export default function animationEnv (view) {
  const Env = Container.createFunctional(view, getStores, getState)
  return <Env/>
}
