import React from 'react'
import { Container } from 'flux/utils'
import bounceStore from '../data/bounce/bounceStore'
import fadeStore from '../data/fade/fadeStore'
import flashStore from '../data/flash/flashStore'
import pulseStore from '../data/pulse/pulseStore'
import shakeStore from '../data/shake/shakeStore'
import swingStore from '../data/swing/swingStore'
import rubberBandStore from '../data/rubberBand/rubberBandStore'
import tadaStore from '../data/tada/tadaStore'
import heartbeatStore from '../data/heartbeat/heartbeatStore'
import CSSHandlerStore from '../data/CSSHandler/CSSHandlerStore'
import '../falAnimation.css'

function getStores () {
  return [
    bounceStore,
    fadeStore,
    flashStore,
    pulseStore,
    shakeStore,
    swingStore,
    rubberBandStore,
    tadaStore,
    heartbeatStore,
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
    shake: {
      state: shakeStore.getState()
    },
    swing: {
      state: swingStore.getState()
    },
    rubberband: {
      state: rubberBandStore.getState()
    },
    tada: {
      state: tadaStore.getState()
    },
    heartbeat: {
      state: heartbeatStore.getState()
    }
  }
}

let View

export default function animationEnv (view) {
  const Env = Container.createFunctional(EnvView, getStores, getState)
  View = view
  return <Env/>
}

function EnvView (props) {
  return (
    <View {...props}/>
  )
}
