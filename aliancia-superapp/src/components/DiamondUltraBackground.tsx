import { ReactNode, useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { DIAMOND_ULTRA } from "@theme/diamondUltra";

interface Props {
  children: ReactNode;
}

export default function DiamondUltraBackground({ children }: Props) {
  const fade = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fade, { toValue: 1, duration: 3500, useNativeDriver: true }),
        Animated.timing(fade, { toValue: 0.2, duration: 3500, useNativeDriver: true })
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
          transform: [{ scale: 1.4 }]
        }}
      />
      {children}
    </View>
  );
}
