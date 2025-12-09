import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Beneficios from "../screens/Beneficios";
import Indicacoes from "../screens/Indicacoes";
import Academia from "../screens/Academia";
import Perfil from "../screens/Perfil";
import Medalhas from "../screens/Medalhas";
import { theme } from "ui/theme";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.deepBlack,
          borderTopColor: theme.colors.border,
          paddingVertical: 6,
          height: 72
        },
        tabBarActiveTintColor: theme.colors.gold,
        tabBarInactiveTintColor: "#666"
      }}
    >
      <Tab.Screen
        name="Início"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={26} color={color} />
        }}
      />

      <Tab.Screen
        name="Benefícios"
        component={Beneficios}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="gift" size={26} color={color} />
        }}
      />

      <Tab.Screen
        name="Indicações"
        component={Indicacoes}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="git-network" size={26} color={color} />
        }}
      />

      <Tab.Screen
        name="Academia"
        component={Academia}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="school" size={26} color={color} />
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person" size={26} color={color} />
        }}
      />

      <Tab.Screen
        name="Medalhas"
        component={Medalhas}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="trophy" size={26} color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
