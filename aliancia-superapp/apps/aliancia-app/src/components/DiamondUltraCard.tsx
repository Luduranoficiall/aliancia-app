import { View } from "react-native";
import { DIAMOND_ULTRA } from "../theme/diamondUltra";

export default function DiamondUltraCard({ children, height = 160 }) {
  return (
    <View
      style={{
        backgroundColor: DIAMOND_ULTRA.blackDeep,
        borderRadius: 18,
        padding: 20,
        height,
        justifyContent: "center",
        borderWidth: 1.5,
        borderColor: DIAMOND_ULTRA.borderUltra,
        shadowColor: DIAMOND_ULTRA.diamondBlue,
        shadowOpacity: 0.9,
        shadowRadius: 25,
        transform: [{ perspective: 800 }, { rotateX: "6deg" }]
      }}
    >
      {children}
    </View>
  );
}
