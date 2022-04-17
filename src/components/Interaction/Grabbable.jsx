import { useRef } from 'react'
import { proxy, ref, useProxy } from 'valtio'
import { Squeeze } from './Controller'

class GrabState {
  left = null
  right = null
  grab(objectRef, hand) {
    this[hand] = ref(objectRef)
  }
  release(hand) {
    this[hand] = null
  }
}

export const input = proxy(new GrabState())

export function Grabbable({ children }) {
  /* Usage
  <Grabbable options={...}>
    { ref => <PhysicsThing ref={ref} /> }
  </Grabbable>
  */
  const ref = useRef()
  const onSqueezeStart = (e) => input.grab(ref, e.controller.inputSource.handedness)
  const onSqueezeEnd = (e) => input.release(e.controller.inputSource.handedness)
  return (
    <Squeeze onSqueezeStart={onSqueezeStart} onSqueezeEnd={onSqueezeEnd}>
      {children(ref)}
    </Squeeze>
  )
}

export const useGrabbed = () => useProxy(input)
