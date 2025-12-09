import { useEffect, useRef } from "react";
import { Animated, Easing, View, Image } from "react-native";

export default function Splash() {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1800,
      easing: Easing.out(Easing.exp),
      useNativeDriver: true
    }).start();
  }, [opacity]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#050505",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Animated.Image
        source={require("./assets/aliancia-logo.png")}
        style={{ width: 180, height: 180, opacity }}
        resizeMode="contain"
      />
    </View>
  );
}
