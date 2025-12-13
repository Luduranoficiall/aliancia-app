import { TouchableOpacity, Text } from "react-native";
import { GOLD } from "@theme/gold";

interface Props {
  title: string;
  onPress: () => void;
}

export default function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: GOLD.gold,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 16
      }}
    >
      <Text style={{ color: GOLD.black, fontSize: 18, fontWeight: "bold" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
