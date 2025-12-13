import { View } from "react-native";
import { COLORS } from "../theme/theme";

export default function Screen({ children }) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.background,
      padding: 24
    }}>
      {children}
    </View>
  );
}
