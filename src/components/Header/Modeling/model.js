import React from "react";
import Office from "./office";
/*
React Three Fiber
: Html5 Canvas + WebGL 을 통해 3D 렌더링을 할 수 있도록 하는 모듈
*/
export function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -4]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export function Model() {
  return (
    <group position={[-0.3, -0.7, 0]}>
      <Office />
    </group>
  );
}
