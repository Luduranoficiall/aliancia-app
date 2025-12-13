import { ReactNode } from "react";
import { View } from "react-native";
import { GOLD } from "@theme/gold";

interface Props {
  children: ReactNode;
  height?: number;
}

export default function Card({ children, height = 120 }: Props) {
  return (
    <View
      style={{
        backgroundColor: GOLD.blackDeep,
        borderColor: GOLD.goldDark,
        borderWidth: 1,
        borderRadius: 14,
        padding: 16,
        height,
        justifyContent: "center"
      }}
    >
      {children}
    </View>
  );
}
