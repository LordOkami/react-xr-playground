import { Suspense, useRef } from "react";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";

import TeleportTravel from "./components/Interaction/TeleportTravel";
import Loading from "./Loading";

import MovementController from "./components/Interaction/MovementController";

import Duck from "./components/Duck";
import BakedRoom from "./components/BakedRoom";

import { OrbitControls, Sky, Box } from "@react-three/drei";

function Floor(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeBufferGeometry args={[100, 100]} attach='geometry' />
      <meshBasicMaterial attach='material' color={"#25282F"} />
    </mesh>
  );
}

export default function App() {
  return (
    <VRCanvas>
      <Suspense fallback={<Loading />}>
        {[...Array(12)].map((_, n) => {
          return <Duck index={n} position={[-4 + n * 2, 0, -10]} size={[1, 1, 1]} />;
        })}
        <BakedRoom />
      </Suspense>
      {/* CONTROLLERS */}
      <MovementController />
      <MovementController hand='left' applyRotation={false} applyHorizontal={true} />
      <DefaultXRControllers />
      <TeleportTravel useNormal={false}>
        <Floor rotation={[-Math.PI / 2, 0, 0]} />
      </TeleportTravel>
      {/* LIGHTS */}
      <Sky distance={3000} turbidity={8} rayleigh={6} mieCoefficient={0.005} mieDirectionalG={0.8} azimuth={0.25} sunPosition={[1, 0, 0]} />
      <ambientLight />
      <directionalLight position={[1, 1, 0]} color='#ffd738' />
      <pointLight position={[10, 10, 10]} />
      {/* CONTROLS WHEN NOT VR */}
      <OrbitControls />
    </VRCanvas>
  );
}
