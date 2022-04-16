import React from 'react'
import { useHitTest } from '@react-three/xr'
import { Box } from '@react-three/drei'

const HitTestExample = () => {
  const ref = React.useRef()

  useHitTest((hit) => {
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale)
  })

  return <Box ref={ref} args={[1, 1, 1]} position={[5, 1, 0]}/>
}

export default HitTestExample;