import { lightPreset } from "./preset";

export function KeyLight() {
  var index = 0;
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={lightPreset[index].keyCr}
      intensity={lightPreset[index].keyBr}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}

export function FillLight() {
  var index = 0;
  return (
    <rectAreaLight
      width={3}
      height={3}
      intensity={lightPreset[index].fillBr}
      color={lightPreset[index].fillCr}
      position={[2, 1, 4]}
      lookAt={[0, 0, 0]}
      penumbra={2}
      castShadow
    />
  );
}
export function RimLight() {
  var index = 0;
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