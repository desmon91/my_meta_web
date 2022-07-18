import { Text } from "@react-three/drei";

export default function ProjectText() {
  return (
    <group name="wtxt">
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[3, 2.2, 2.8]}
        rotation={[0, 3.5, 0]}
        anchorX={"left"}
      >
        Recent
      </Text>

      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[3, 1.6, 2.8]}
        rotation={[0, 3.5, 0]}
        anchorX={"left"}
      >
        Project
      </Text>
    </group>
  );
}
