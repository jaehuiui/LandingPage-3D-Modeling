import React, { Suspense, useRef } from "react";
import { CssBaseline, Typography } from "@material-ui/core";
import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree,
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { headerStyles } from "./style";
import WeebutLogo from "../../assets/logo/Weebut-light-192.png";

extend({ OrbitControls });

/*
React Three Fiber
: Html5 Canvas + WebGL 을 통해 3D 렌더링을 할 수 있도록 하는 모듈
*/

function Loading() {
  return (
    /*
    mesh
    : 모델의 shape을 결정할 수 있도록 사용
    Parameters
    : Geometry, Material -> 형태와 재질을 결정
    */
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      {/* sphere 형태의 기하, radius, widthSegment, heightSegment */}
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      {/* 재질의 특징을 결정할 수 있는 Parameters */}
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}

function Model() {
  const group = useRef();
  const { nodes } = useLoader(GLTFLoader, "models/arwing.glb");
  // useFrame will run outside of react in animation frames to optimize updates.
  useFrame(() => {
    group.current.rotation.y += 0.009;
  });
  return (
    // Add a ref to the group. This gives us a hook to manipulate the properties of this geometry in the useFrame callback.
    <group ref={group}>
      <mesh visible geometry={nodes.Default.geometry} scale={[1.5, 1.5, 1.5]}>
        <meshStandardMaterial
          attach="material"
          color="#B5D3E9"
          roughness={0.6}
          metalness={0.6}
        />
      </mesh>
    </group>
  );
}

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={false}
      maxAzimuthAngle={Math.PI / 2}
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 2}
      minPolarAngle={0}
    />
  );
};

function Header() {
  const classes = headerStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.root}>
        <div className={classes.upperContainer}>
          <img src={WeebutLogo} alt={"Weebut"} className={classes.teamLogo} />
          <Typography component="h3" variant="h4" className={classes.teamName}>
            Weebut
          </Typography>
        </div>
        <Canvas className={classes.lowerContainer}>
          <CameraControls />
          <directionalLight intensity={0.7} />
          <Suspense fallback={<Loading />}>
            <Model />
          </Suspense>
        </Canvas>
      </div>
    </React.Fragment>
  );
}

export default Header;
