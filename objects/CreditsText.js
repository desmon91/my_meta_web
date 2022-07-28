import { Text } from "@react-three/drei";

export default function CreditsText() {
  return (
    <group name="wtxt">
      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-7, 2.2, 1]}
        rotation={[0, 1.5, 0]}
        anchorX={"left"}
      >
        Credits
      </Text>

      <Text
        color="orange"
        outlineColor={"black"}
        outlineWidth={0.01}
        castShadow
        fontSize={0.6}
        position={[-7, 1.6, 1]}
        rotation={[0, 1.5, 0]}
        anchorX={"left"}
      >
        Scene
      </Text>
    </group>
  );
}
