import { View, Animated } from "react-native";
import { useEffect, useRef } from "react";
import { DIAMOND_ULTRA } from "../theme/diamondUltra";

export default function DiamondUltraBackground({ children }) {
  const fade = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fade, { toValue: 1, duration: 3000, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 0.2, duration: 3000, useNativeDriver: true })
      ])
    ).start();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: DIAMOND_ULTRA.black }}>
      <Animated.View
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: fade,
          backgroundColor: DIAMOND_ULTRA.diamondBlueDeep,
          borderRadius: 999,
          transform: [{ scale: 1.4 }],
          filter: "blur(100px)"
        }}
      />
      {children}
    </View>
  );
}
