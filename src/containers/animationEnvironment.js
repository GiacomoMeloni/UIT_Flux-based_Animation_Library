import React from 'react'
import { Container } from 'flux/utils'
import bounceActions from '../data/bounce/bounceActions'
import bounceStore from '../data/bounce/bounceStore'

function getStores () {
  return [
    bounceStore//,
    //shakeStore
  ]
}

function getState () {
  return {
    bounce: {
      state: bounceStore.getState(),
      changeValue: bounceActions.changeValue
    },
    shake: {
      //state: shakeStore.getState()
    }
  }
}

export default function animationEnv (view) {
  const Env = Container.createFunctional(view, getStores, getState)
  return <Env/>
}