import "./styles.css";
import { Suspense } from "react";
import { DoubleSide } from "three";
import { VRCanvas, DefaultXRControllers, RayGrab } from "@react-three/xr";

import TeleportTravel from "./TeleportTravel";
import Loading from "./Loading";

import MovementController from "./MovementController";

import Room from "./components/Room";
import Duck from "./components/Duck";

import { OrbitControls, Sky } from "@react-three/drei";
import HitTestExample from "./components/HitTestExample";

function Floor(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeBufferGeometry args={[100, 100]} attach="geometry" />
      <meshBasicMaterial attach="material" color={"#25282F"} />
    </mesh>
  );
}

export default function App() {
  return (
    <VRCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
      <Suspense fallback={<Loading />}>
        {
          [...Array(8)].map((_, n) => {
            return <Duck position={[-4 + n*2, 0, -10]} size={[1, 1, 1]} />
          })
        }
      </Suspense>
      <HitTestExample />
      {/* CONTROLLERS */}
      <MovementController />
      <MovementController
        hand="left"
        applyRotation={false}
        applyHorizontal={true}
      />
      <DefaultXRControllers />
      <TeleportTravel useNormal={true}>
        <Floor rotation={[-Math.PI / 2, 0, 0]} />
      </TeleportTravel>
      {/* LIGHTS */}
      <Sky
        distance={3000}
        turbidity={8}
        rayleigh={6}
        mieCoefficient={0.005}
        mieDirectionalG={0.8}
        azimuth={0.25}
        sunPosition={[1, 0, 0]}
      />
      <ambientLight />
      <directionalLight position={[1, 1, 0]} color="#ffd738" />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
    </VRCanvas>
  );
}
