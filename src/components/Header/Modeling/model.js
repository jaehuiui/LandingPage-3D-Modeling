import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
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
  const { scene, nodes, materials } = useGLTF("models/testf.gltf");
  const group = useRef();
  // useFrame will run outside of react in animation frames to optimize updates.
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
    group.current.rotation.x = Math.cos(t / 4) / 8;
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.position.y = (1 + Math.sin(t / 1.5)) / 10 - 0.5;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      {/* <mesh geometry={nodes.평면.geometry}>
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
      <mesh geometry={nodes.큐브.geometry}>
        <meshStandardMaterial attach="material" color="white" />
      </mesh> */}
      {/* <mesh geometry={nodes.a.geometry}>
        <meshStandardMaterial attach="material" color="hotpink" />
      </mesh>
      
      {/* <mesh>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
      </mesh> */}
      <primitive scale={[1, 1, 1]} object={scene} dispose={null} />
    </group>
  );
}
