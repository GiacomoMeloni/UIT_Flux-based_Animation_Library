import React from 'react'
import { Container } from 'flux/utils'
import bounceActions from '../data/bounce/bounceActions'
import bounceStore from '../data/bounce/bounceStore'
import fadeStore from '../data/fade/fadeStore'
import fadeActions from '../data/fade/fadeActions'
import CSSHandlerActions from '../data/CSSHandler/CSSHandlerActions'
import CSSHandlerStore from '../data/CSSHandler/CSSHandlerStore'
// import '../animate.css'
import '../test.css'

function getStores () {
  return [
    bounceStore,
    fadeStore,
    CSSHandlerStore
  ]
}

function getState () {
  return {
    bounce: {
      state: bounceStore.getState(),
      changeValue: bounceActions.changeValue
    },
    fade: {
      state: fadeStore.getState(),
      newSimpleFade: fadeActions.newSimpleFade,
      newFade: fadeActions.newFade,
      changeEntry: fadeActions.changeEntry,
      changeDirection: fadeActions.changeDirection
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
