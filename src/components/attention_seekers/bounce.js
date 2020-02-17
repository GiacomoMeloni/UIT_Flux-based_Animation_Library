import React from 'react'
import PropTypes from 'prop-types'
import getAnimation from '../../data/animation'
import CSSHandlerActions from '../../data/CSSHandler/CSSHandlerActions'
import bounceActions from '../../data/bounce/bounceActions'

function bounce ({
  id, bounces, limit, transformOrigin, entry, entryDirection,
  duration, timing, delay, iterations, direction, fillMode, playState, ...rest
}) {
  let animation

  if (!rest.bounce.state.has(id)) {
    animation = getAnimation(id, { duration, timing, delay, iterations, direction, fillMode, playState })
    bounceActions.newBounce(
      id, bounces, limit, transformOrigin, entry, entryDirection,
      duration, timing, delay, iterations, direction, fillMode, playState
    )
  } else {
    const bounceObj = rest.bounce.state.get(id)
    // TODO: code to verify
    animation = getAnimation(id, {}, bounceObj.style)
    console.log(bounceObj)

    // only if entry is not set
    animation.transfromOrigin = !bounceObj.entry && bounceObj.transformOrigin

    const rule = `@keyframes ${id} {\n${bounceKeyframes(bounceObj)}\n}`
    console.log(rule)
    CSSHandlerActions.insertRule(id, rule)

    // test
    // animation.animationIterationCount = 'infinite'
  }

  return (
    <div id={id} style={animation} {...rest}>
      { rest.children }
    </div>
  )
}

function bounceKeyframes ({ bounces, limit, entry, entryDirection }) {
  const frames = bounces * 2
  let bound, linspace
  switch (entry) {
    case 'in':
      if (entryDirection) {
        bound = 100 - 40 - frames
        linspace = Math.floor(bound / frames)
      } else {
        linspace = Math.floor(100 / (frames - 1))
      }
      break
    case 'out':
      bound = 100 - 60 + frames
      linspace = Math.floor(bound / frames)
      break
    default:
      if (entry) console.error('entry does not support value: ' + entry)
      linspace = Math.floor(100 / frames)
  }
  // if topLimit not null or zero
  if (!limit) {
    switch (entry) {
      case 'in':
      case 'out':
        if (!entryDirection) limit = 1.1 + frames * 0.01
        else limit = 6 * frames
        break
      default:
        limit = bounces * 10
    }
  }

  let originFrame = entry !== 'out' ? 'from,\n' : ''
  let transform = limit
  let multiplier
  let bounceFrame = ''

  switch (entry) {
    case 'in':
      multiplier = frames - 1
      for (const i in [...Array(frames).keys()]) {
        if (entryDirection) {
          transform = Math.floor(multiplier / bounces * limit)
          if (multiplier === 1 || multiplier === -1) transform /= 2

          bounceFrame += '\n\n' + linspace * i + '% {\n' +
            '   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
            '   transform: translate3d(0, ' + -transform + 'px, 0);\n' +
            '}'

          multiplier = -Math.sign(multiplier) * (Math.abs(multiplier) - 1)
        } else {
          switch (i) {
            case '0':
              bounceFrame += '\n\n0% {\n' +
                '   opacity: 0;\n' +
                '   transform: scale3d(0.3, 0.3, 0.3);\n' +
                '}'
              break
            case (frames - 1).toString():
              bounceFrame += '\n\nto {\n' +
                '   opacity: 1;\n' +
                '   transform: scale3d(1, 1, 1);\n' +
                '}'
              break
            default: {
              originFrame += linspace * i + '%,\n'
              bounceFrame += '\n\n' + linspace * i + '% {\n'
              if (i === (frames / 2).toString()) bounceFrame += '   opacity: 1;\n'

              if (i !== '1') {
                let shift = (limit - 1) * (multiplier) / (frames)
                if (shift > 1 && i % 2 === 0) shift = 0.99
                transform = i % 2 !== 0 ? 1 + shift : 1 - shift
                multiplier -= 1
              }
              bounceFrame += `   transform: scale3d(${transform}, ${transform}, ${transform});\n}`
            }
          }
        }
      }
      break

    default:
      multiplier = bounces - 1
      for (const i in [...Array(frames).keys()]) {
        if (i % 2 === 0) {
          originFrame += (i > 0 ? linspace * i : linspace) + '%,\n'
        } else {
          if (i > 1) {
            transform = Math.floor(multiplier / bounces * limit)
            if (multiplier === 1) transform /= 2

            bounceFrame += '\n\n' + linspace * i + '% {\n' +
              '   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
              '   transform: translate3d(0, ' + -transform + 'px, 0);\n' +
              '}'

            multiplier -= 1
          } else {
            bounceFrame = '\n\n' + Math.floor(linspace * 1.5) + '% {\n' +
              '   animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\n' +
              '   transform: translate3d(0, ' + -transform + 'px, 0);\n' +
              '}'
          }
        }
      }
  }

  if (entry !== 'out') {
    originFrame += 'to {\n' +
      '   animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\n'
    if (!entry) originFrame += '   transform: translate3d(0, 0, 0);\n'
    originFrame += '}'
  }

  return originFrame + bounceFrame
}

function transformDir (dir, value) {
  switch (dir) {
    case 'up':
    case 'down':
      return `transform: translate3d(0, ${value}, 0);`
    case 'left':
    case 'right':
      return `transform: translate3d(${value}, 0, 0);`
    default:
      throw Error(`${dir} can not be parsed as a direction`)
  }
}

export function setBounces (value) {
  bounceActions.changeValue(this.id, 'bounces', value)
}

export function setLimit (value) {
  bounceActions.changeValue(this.id, 'limit', value)
}

export function setTransformOrigin (value) {
  bounceActions.changeValue(this.id, 'transformOrigin', value)
}

export function setEntry (value) {
  bounceActions.changeValue(this.id, 'entry', value)
}

export function setEntryDirection (value) {
  bounceActions.changeValue(this.id, 'entryDirection', value)
}

bounce.propTypes = {
  id: PropTypes.string,
  anim: PropTypes.object,
  transformOrigin: PropTypes.string,
  bounces: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  limit: PropTypes.number,
  entry: PropTypes.oneOf(['in', 'out']),
  entryDirection: PropTypes.oneOf(['left', 'right', 'up', 'down']),
  duration: PropTypes.string,
  timing: PropTypes.string,
  delay: PropTypes.string,
  iterations: PropTypes.string,
  direction: PropTypes.string,
  fillMode: PropTypes.string,
  playState: PropTypes.string
}

export default bounce
