import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";
import { lightPreset, lightPresetIndex } from "../../Header/Preset/lightPreset";

var index = lightPresetIndex;

function LightRotating(ref, time) {
  ref.current.position.x = -16 * Math.sin(time / 20) + 8;
  ref.current.position.y = 8 * Math.abs(Math.sin(time / 10)) + 8;
  ref.current.position.z = 8 * Math.abs(Math.sin(time / 10)) + 2;
}

function KeyLightIntensity(ref, time) {
  ref.current.intensity = 0.25 * Math.sin(time / 20) + 0.3;
}

function SunsetLightIntensity(ref, time) {
  if (time >= 6 * Math.PI && time < 8 * Math.PI) {
    ref.current.intensity = 0.25 * Math.sin((time - 6 * Math.PI) / 4);
  } else if (time >= 8 * Math.PI && time < 10 * Math.PI) {
    ref.current.intensity = 0.25 * Math.cos((time - 8 * Math.PI) / 4);
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

function DoomLight1Intensity(ref, time) {
  if (time >= 0 * Math.PI && time < 3 * Math.PI) {
    ref.current.intensity = 0.2 * Math.cos(time / 6);
  } else {
    ref.current.intensity = 0;
  }
}

function DoomLight2Intensity(ref, time) {
  if (time >= 12 * Math.PI && time < 20 * Math.PI) {
    ref.current.intensity = 0.2 * Math.sin((time - 12 * Math.PI) / 16);
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
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
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
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
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
      color="#C4D5E5"
      decay={2}
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
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
      color="#C4D5E5"
      decay={2}
      shadow-mapSize-height={4096}
      shadow-mapSize-width={4096}
      castShadow
    />
  );
}

export function FillLight() {
  return (
    <rectAreaLight
      position={[0, 0, 0.5]}
      width={3}
      height={0.4}
      intensity={0.7}
      color={"#FFFFFF"}
      castShadow
      decay={50}
      lookAt={[0, 10, 0.3]}
    />
  );
}

export function RimLight() {
  const _RimLight = useRef();

  return (
    <rectAreaLight
      ref={_RimLight}
      width={0.8}
      height={1.5}
      intensity={2}
      color={"#FFFFFF"}
      position={[1.08, 0.9, 0.3]}
      penumbra={1}
      lookAt={[4.2, 0.5, 0.3]}
      rotation={[0, Math.PI / 2, 0]}
      castShadow
    />
  );
}
