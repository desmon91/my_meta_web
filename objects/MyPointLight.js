import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";

export default function MyPointLight({ ...props }) {
  const light = useRef();
  useHelper(light, PointLightHelper, 0.5, "cyan");
  return <pointLight {...props} ref={light} />;
}
