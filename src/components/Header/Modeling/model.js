import React, { Suspense } from "react";
import Office from "./office";
import { KeyLight, FillLight, SunsetLight, DoomLight } from "./light";
import { Canvas } from "react-three-fiber";
import { softShadows } from "@react-three/drei";

softShadows();

function Plane(props) {
  return (
    <mesh
      receiveShadow
      rotation-x={-Math.PI / 2}
      {...props}
      position={[0, 0, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <shadowMaterial attach="material" transparent opacity={0.4} />
    </mesh>
  );
}

export function Model() {
  return (
    <Canvas
      camera={{ zoom: 1, fov: 25, position: [14.3, 2.5, 8] }}
      colorManagement
      shadowMap
    >
      {/* <fog attach="fog" args={["white", 0, 80]} /> */}
      <KeyLight />
      <SunsetLight />
      <DoomLight />
      <Suspense fallback={null}>
        <group position={[4.2, -0.5, 0]}>
          <Plane />
          <Office />
        </group>
      </Suspense>
    </Canvas>
  );
}
