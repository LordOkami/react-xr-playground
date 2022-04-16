import "./styles.css";
import { Suspense } from "react";
import { DoubleSide } from "three";
import { VRCanvas, DefaultXRControllers, RayGrab } from "@react-three/xr";

import TeleportTravel from "./TeleportTravel";
import BallPit from "./Ballpit";
import Loading from "./Loading";

import MovementController from "./MovementController";

import Room from "./components/Room";
import { OrbitControls, Sky } from "@react-three/drei";

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
    <VRCanvas>
      <TeleportTravel useNormal={true}>
        <Floor rotation={[-Math.PI / 2, 0, 0]} />
      </TeleportTravel>
      <MovementController />
      <MovementController
        hand="left"
        applyRotation={false}
        applyHorizontal={true}
      />
      <DefaultXRControllers />
      {/* <BallPit position={[0, 3, 0]} /> */}
      {/* <Cage /> */}
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
      <directionalLight />
      <Suspense fallback={<Loading />}>
        <Room position={[0, 5, 0]} />
      </Suspense>
      <OrbitControls />
    </VRCanvas>
  );
}
