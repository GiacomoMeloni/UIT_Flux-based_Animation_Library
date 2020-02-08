import React from 'react'
import { Container } from 'flux/utils'
import bounceStore from '../data/bounce/bounceStore'
import CSSHandlerStore from '../data/CSSHandler/CSSHandlerStore'
// import '../animate.css'
import '../test.css'

function getStores () {
  return [
    bounceStore,
    CSSHandlerStore//,
    // shakeStore
  ]
}

function getState () {
  return {
    bounce: bounceStore.getState(),
    shake: ''// state: shakeStore.getState()
  }
}

export default function animationEnv (view) {
  const Env = Container.createFunctional(view, getStores, getState)
  return <Env/>
}
