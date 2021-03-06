/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Background(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("models/office_back.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        material={materials.black2}
        geometry={nodes.background.geometry}
        position={[-0.16, -0.43, 2.24]}
        scale={[20.99, 8.99, 8.99]}
        receiveShadow
      >
        <shadowMaterial attach="material" transparent opacity={0.0} />
        <meshStandardMaterial
          attach="material"
          color={"#000000"}
          metalness={0.0}
          roughness={1.0}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("models/office_back.gltf");
