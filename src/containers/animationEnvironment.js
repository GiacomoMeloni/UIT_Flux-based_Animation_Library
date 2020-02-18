import React from 'react'
import { Container } from 'flux/utils'
import bounceStore from '../data/bounce/bounceStore'
import fadeStore from '../data/fade/fadeStore'
import rubberBandStore from '../data/rubberBand/rubberBandStore'
import CSSHandlerActions from '../data/CSSHandler/CSSHandlerActions'
import CSSHandlerStore from '../data/CSSHandler/CSSHandlerStore'
import '../test.css'

function getStores () {
  return [
    bounceStore,
    fadeStore,
    rubberBandStore,
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
    rubberBand: {
      state: rubberBandStore.getState()
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
