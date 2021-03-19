import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { lightPreset, lightPresetIndex } from "../Preset/lightPreset";

var index = lightPresetIndex;

function KeyLightRotating(ref, time) {
  ref.current.position.x = -3.5 * Math.cos(time / 6) + 11.5;
  ref.current.position.y = -3.5 * Math.cos(time / 6) + 12.5;
  ref.current.position.z = -3.5 * Math.cos(time / 6) + 8.5;
}

function KeyLightIntensity(ref, time) {
  ref.current.intensity = -0.5 * Math.cos(time / 6) + 0.4;
}

function DoomLightIntensity(ref, time) {
  if (time >= 0 * Math.PI && time < 3 * Math.PI) {
    ref.current.intensity = -0.5 * Math.cos(time / 6) + 0.65;
  } else if (time >= 10 * Math.PI && time < 12 * Math.PI) {
    ref.current.intensity = -0.5 * Math.cos(time / 6) + 0.65;
  } else {
    ref.current.intensity = 0;
  }
}

function SunsetLightIntensity(ref, time) {
  if (time >= 8 * Math.PI && time < 10 * Math.PI) {
    ref.current.intensity = 0.5 * Math.sin(time / 2);
  } else {
    ref.current.intensity = 0;
  }
}

export function KeyLight() {
  const _keylight = useRef();

  useFrame((state) => {
    var t = state.clock.getElapsedTime() % (12 * Math.PI);
    KeyLightRotating(_keylight, t);
    KeyLightIntensity(_keylight, t);
  });

  return (
    <pointLight
      ref={_keylight}
      position={[8, 10, 12]}
      color={lightPreset[index].keyCr}
      decay={2}
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
    />
  );
}

export function SunsetLight() {
  const _Sunsetlight = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (12 * Math.PI);
    KeyLightRotating(_Sunsetlight, t);
    SunsetLightIntensity(_Sunsetlight, t);
  });

  return (
    <pointLight
      ref={_Sunsetlight}
      position={[8, 10, 12]}
      color="#ED8463"
      decay={2}
    />
  );
}

export function DoomLight() {
  const _Doomlight = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (12 * Math.PI);
    KeyLightRotating(_Doomlight, t);
    DoomLightIntensity(_Doomlight, t);
  });

  return (
    <pointLight
      ref={_Doomlight}
      position={[8, 10, 12]}
      color="#97C2E3"
      decay={2}
    />
  );
}

export function FillLight() {
  return (
    <spotLight
      position={[5.5, 20, 0.5]}
      intensity={lightPreset[index].fillBr}
      color={lightPreset[index].fillCr}
    />
  );
}
export function RimLight() {
  return (
    <rectAreaLight
      width={2}
      height={2}
      intensity={lightPreset[index].rimBr}
      color={lightPreset[index].rimCr}
      position={[1, 4, -2]}
      rotation={[0, 180, 0]}
      castShadow
    />
  );
}
