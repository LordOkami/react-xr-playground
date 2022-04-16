import React from 'react'


const Lighting = () => {
  console.log('Lighting')
  return (
    <group>
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight skyColor={0xffffbb} groundColor={0x080820} intensity={0.5} />
      <pointLight position={[-10, 0, -20]} intensity={0.1} />
      <pointLight position={[0, -10, 0]} intensity={0.1} />
    </group>
  )
}

export default Lighting;