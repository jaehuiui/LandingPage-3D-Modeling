import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { lightPreset, lightPresetIndex } from "../Preset/lightPreset";

var index = lightPresetIndex;

function LightRotating(ref, time) {
  ref.current.position.x = -12 * Math.sin(time / 20) + 15;
  ref.current.position.y = 6 * Math.abs(Math.sin(time / 10)) + 9;
  ref.current.position.z = 14 * Math.sin(time / 20) - 2;
}

function KeyLightIntensity(ref, time) {
  ref.current.intensity = 0.25 * Math.sin(time / 10) + 0.1;
}

function DoomLight1Intensity(ref, time) {
  if (time >= 0 * Math.PI && time < 3 * Math.PI) {
    ref.current.intensity = 0.3 * Math.cos(time / 6);
  } else {
    ref.current.intensity = 0;
  }
}

function DoomLight2Intensity(ref, time) {
  if (time >= 12 * Math.PI && time < 20 * Math.PI) {
    ref.current.intensity = 0.3 * Math.sin((time - 12 * Math.PI) / 16);
  } else {
    ref.current.intensity = 0;
  }
}

function NormalLightIntensity(ref, time) {
  if (time >= 2 * Math.PI && time < 7 * Math.PI) {
    ref.current.intensity = 0.3 * Math.sin((time - 2 * Math.PI) / 5);
  } else {
    ref.current.intensity = 0;
  }
}

function SunsetLightIntensity(ref, time) {
  if (time >= 6 * Math.PI && time < 8 * Math.PI) {
    ref.current.intensity = 0.3 * Math.sin((time - 6 * Math.PI) / 4);
  } else if (time >= 8 * Math.PI && time < 10 * Math.PI) {
    ref.current.intensity = 0.3 * Math.cos((time - 8 * Math.PI) / 4);
  } else {
    ref.current.intensity = 0;
  }
}

export function KeyLight() {
  const _keylight = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    LightRotating(_keylight, t);
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
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    LightRotating(_Sunsetlight, t);
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

export function DoomLight1() {
  const _Doomlight1 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    LightRotating(_Doomlight1, t);
    DoomLight1Intensity(_Doomlight1, t);
  });

  return (
    <pointLight
      ref={_Doomlight1}
      position={[8, 10, 12]}
      color="#97C2E3"
      decay={2}
    />
  );
}

export function DoomLight2() {
  const _Doomlight2 = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    LightRotating(_Doomlight2, t);
    DoomLight2Intensity(_Doomlight2, t);
  });

  return (
    <pointLight
      ref={_Doomlight2}
      position={[8, 10, 12]}
      color="#97C2E3"
      decay={2}
    />
  );
}

export function NormalLight() {
  const _Normallight = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() % (20 * Math.PI);
    LightRotating(_Normallight, t);
    NormalLightIntensity(_Normallight, t);
  });

  return (
    <pointLight
      ref={_Normallight}
      position={[8, 10, 12]}
      color="#E8F0F6"
      decay={2}
    />
  );
}

export function FillLight() {
  return (
    <spotLight
      position={[8, 10, 12]}
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
