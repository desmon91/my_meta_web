import { Text } from "@react-three/drei";

export default function AboutText() {
  return (
    <group name="wtxt">
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[4, 2.2, -2]}
        rotation={[0, -1.5, 0]}
        anchorX={"left"}
      >
        About
      </Text>

      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[4, 1.6, -2]}
        rotation={[0, -1.5, 0]}
        anchorX={"left"}
      >
        Me
      </Text>
    </group>
  );
}
