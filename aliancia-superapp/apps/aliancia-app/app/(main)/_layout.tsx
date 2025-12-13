import { Tabs } from "expo-router";
import { COLORS } from "../../src/theme/theme";
import { DIAMOND } from "../../src/theme/diamond";
import { Ionicons } from "@expo/vector-icons";

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.backgroundSecondary,
          borderTopWidth: 1,
          borderTopColor: DIAMOND.glow,
          height: 65,
          shadowColor: DIAMOND.glow,
          shadowOpacity: 0.7,
          shadowRadius: 10
        },
        tabBarActiveTintColor: DIAMOND.glow,
        tabBarInactiveTintColor: COLORS.textSecondary
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="finance-center"
        options={{
          title: "Financeiro",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="indica-i"
        options={{
          title: "INDICA.I",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="community"
        options={{
          title: "Comunidade",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          )
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
