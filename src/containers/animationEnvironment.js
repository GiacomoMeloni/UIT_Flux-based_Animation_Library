import React from 'react'
import { Container } from 'flux/utils'
import bounceActions from '../data/bounce/bounceActions'
import bounceStore from '../data/bounce/bounceStore'
import fadeStore from '../data/fade/fadeStore'
import fadeActions from '../data/fade/fadeActions'

function getStores () {
  return [
    bounceStore,
    fadeStore//,
    // shakeStore
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
      changeEntry: fadeActions.changeEntry
      // state: shakeStore.getState()
    }
  }
}

export default function animationEnv (view) {
  const Env = Container.createFunctional(view, getStores, getState)
  return <Env/>
}
