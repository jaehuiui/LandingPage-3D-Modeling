import React, { Suspense, useRef, useState } from "react";
import {
  MainLight,
  SubLight,
  TextLight,
  GlobalLight,
  CeilingLight,
  AmbientLight,
} from "./light";
import { Canvas, extend, useThree } from "react-three-fiber";
import { softShadows } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Background from "./background";
import Weebut from "./weebut";

extend({ OrbitControls });
softShadows();

function Plane(props) {
  return (
    <mesh
      receiveShadow
      rotation-x={-Math.PI / 2}
      {...props}
      position={[0, -0.3, 0]}
    >
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      {/* <shadowMaterial attach="material" transparent opacity={0.2} /> */}
      <meshStandardMaterial attach="material" color={"#121212"} />
    </mesh>
  );
}

function CameraControl() {
  const controls = useRef();

  const {
    camera,
    gl: { domElement },
  } = useThree();
  return (
    <>
      <orbitControls
        ref={controls}
        args={[camera, domElement]}
        enableZoom={false}
        maxAzimuthAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 8}
        minPolarAngle={Math.PI / 6}
      />
    </>
  );
}

export function Model() {
  const [rotation, setRotation] = useState([0, 0, 0, 0]);

  const onMouseMove = (e) => {
    setRotation([
      ((e.clientY / e.target.offsetHeight - 0.5) * Math.PI) / 12,
      ((e.clientX / e.target.offsetWidth - 0.5) * Math.PI) / 12,
      0,
    ]);
  };

  return (
    <Canvas
      camera={{ zoom: 1, fov: 30, position: [0, 0.7, 7.8] }}
      gl={{ antialias: true }}
      colorManagement
      shadowMap
      onMouseMove={onMouseMove}
    >
      <MainLight />
      <SubLight />
      <GlobalLight />
      <CeilingLight />
      <AmbientLight />
      <TextLight />
      <Suspense fallback={null}>
        <group position={[-0.1, -0.7, 0]} rotation={rotation}>
          <Weebut />
          <Background />
        </group>
      </Suspense>
    </Canvas>
  );
}
