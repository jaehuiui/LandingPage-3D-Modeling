import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { lightPreset, lightPresetIndex } from "../Preset/lightPreset";

var index = lightPresetIndex;

function MainLightRotating(ref, time) {
  ref.current.position.x = -16 * Math.sin(time / 20) + 8;
  ref.current.position.y = 8 * Math.abs(Math.sin(time / 10)) + 8;
  ref.current.position.z = -8 * Math.abs(Math.sin(time / 10)) + 2;
}

function MainLightIntensity(ref, time) {
  ref.current.intensity = 0.25 * Math.sin(time / 20) + 0.3;
}

export function MainLight() {
  const _keylight = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    MainLightRotating(_keylight, t);
    MainLightIntensity(_keylight, t);
  });

  return (
    <pointLight
      ref={_keylight}
      position={[8, 10, 12]}
      color={lightPreset[index].keyCr}
      decay={10}
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
    />
  );
}

function SubLightRotating(ref, time) {
  ref.current.position.x = 16 * Math.sin(time / 20) - 8;
  ref.current.position.y = 6 * Math.abs(Math.sin(time / 10)) + 7;
  ref.current.position.z = -10 * Math.abs(Math.sin(time / 10)) + 5;
}

function SubLightIntensity(ref, time) {
  ref.current.intensity = 0.2 * Math.sin(time / 20) + 0.1;
}

export function SubLight() {
  const _sublight = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    SubLightRotating(_sublight, t);
    SubLightIntensity(_sublight, t);
  });

  return (
    <pointLight
      ref={_sublight}
      position={[8, 10, 12]}
      color={lightPreset[index].keyCr}
      decay={20}
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
    />
  );
}

export function TextLight() {
  return (
    <rectAreaLight
      position={[0, -0.1, 0.5]}
      width={3}
      height={0.4}
      intensity={1.4}
      color={"#FFFFFF"}
      castShadow
      decay={50}
      lookAt={[0, 10, 0.3]}
    />
  );
}

export function GlobalLight() {
  return (
    <directionalLight
      position={[0, 8, -10]}
      color={"#FFFFFF"}
      intensity={0.8}
    />
  );
}

export function CeilingLight() {
  return (
    <pointLight
      position={[0, 20, -1]}
      color={"#FFFFFF"}
      decay={20}
      intensity={0.3}
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
    />
  );
}

export function AmbientLight() {
  return <ambientLight intensity={0.05} />;
}
