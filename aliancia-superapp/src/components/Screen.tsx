import { ReactNode } from "react";
import { View } from "react-native";
import { GOLD } from "@theme/gold";

interface Props { children: ReactNode }

export default function Screen({ children }: Props) {
  return (
    <View style={{ flex: 1, backgroundColor: GOLD.black, padding: 24 }}>
      {children}
    </View>
  );
}
