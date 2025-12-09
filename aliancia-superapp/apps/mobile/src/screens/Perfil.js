import { View, Text, Image, ScrollView } from "react-native";
import { theme } from "ui/theme";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Perfil() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.bgDeep }}
      contentContainerStyle={{ padding: 28 }}
    >
      <Animated.View entering={FadeInDown.duration(600)}>
        <Image
          source={{ uri: "https://i.pravatar.cc/260" }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 70,
            alignSelf: "center",
            borderWidth: 3,
            borderColor: theme.colors.gold
          }}
        />
      </Animated.View>

      <Text
        style={{
          marginTop: 20,
          fontSize: 32,
          color: theme.colors.goldText,
          textAlign: "center",
          fontWeight: "bold"
        }}
      >
        Humberto Duran
      </Text>

      <View
        style={{
          marginTop: 40,
          padding: 24,
          backgroundColor: theme.colors.card,
          borderRadius: theme.radius.xl,
          borderColor: theme.colors.border,
          borderWidth: 1
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22 }}>Saldo Wallet</Text>
        <Text style={{ color: theme.colors.gold, fontSize: 40, fontWeight: "bold" }}>
          R$ 3.740,00
        </Text>
      </View>

      <View
        style={{
          marginTop: 20,
          padding: 24,
          backgroundColor: theme.colors.card,
          borderRadius: theme.radius.xl,
          borderColor: theme.colors.border,
          borderWidth: 1
        }}
      >
        <Text style={{ color: "#fff", fontSize: 22 }}>Cashback Acumulado</Text>
        <Text style={{ color: theme.colors.accent, fontSize: 40, fontWeight: "bold" }}>
          R$ 1.120,00
        </Text>
      </View>
    </ScrollView>
  );
}
