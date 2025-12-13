// Certifique-se de instalar expo-router: npm install expo-router
import { Tabs } from "expo-router";
import { GOLD } from "@theme/gold";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: GOLD.blackDeep,
          borderTopColor: GOLD.goldDark,
          borderTopWidth: 1,
          height: 64
        },
        tabBarActiveTintColor: GOLD.gold,
        tabBarInactiveTintColor: GOLD.textSecondary
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Início",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="finance-center"
        options={{
          title: "Financeiro",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="wallet-outline" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="indica-i"
        options={{
          title: "INDICA.I",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="sparkles-outline" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Comunidade",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="people-outline" color={color} size={size} />
          )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }: { color: string; size: number }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          )
        }}
      />
    </Tabs>
  );
}
