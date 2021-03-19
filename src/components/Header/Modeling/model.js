import React, { Suspense } from "react";
import Office from "./office";
import {
  KeyLight,
  NormalLight,
  SunsetLight,
  DoomLight1,
  DoomLight2,
  RimLight,
} from "./light";
import { Canvas, extend, useThree } from "react-three-fiber";
import { softShadows} from "@react-three/drei";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

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

const Scene = () => {
  const {
    camera,
    gl: { domElement }
  } = useThree()
  return (
    <>
      <orbitControls args={[camera, domElement]} />
    </>
  )
}

export function Model() {

  return (
    <Canvas
      camera={{ zoom: 1, fov: 23, position: [10.3, 2.5, 8] }}
      colorManagement
      shadowMap
    >
    {/* <Scene /> */}
      {/* <fog attach="fog" args={["white", 0, 80]} /> */}
      <KeyLight />
      <SunsetLight />
      <DoomLight1 />
      <DoomLight2 />
      <NormalLight />
      <RimLight />
      <Suspense fallback={null}>
        <group position={[0.2, -0.6, 0]}>
          <Plane />
          <Office />
        </group>
      </Suspense>
    </Canvas>
  );
}
