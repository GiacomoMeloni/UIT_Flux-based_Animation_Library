import React from 'react'
import { Container } from 'flux/utils'
import bounceStore from '../data/bounce/bounceStore'
import fadeStore from '../data/fade/fadeStore'
import flashStore from '../data/flash/flashStore'
import pulseStore from '../data/pulse/pulseStore'

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
      state: bounceStore.getState()
    },
    fade: {
      state: fadeStore.getState()
    },
    flash: {
      state: flashStore.getState()
    },
    pulse: {
      state: pulseStore.getState()
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
