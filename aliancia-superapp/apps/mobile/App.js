import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainTabs from "./src/navigation/MainTabs";
import Splash from "./src/Splash";
import { registerPush } from "./firebase";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    registerPush().catch(() => undefined);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Splash />;

  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}
