import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Button = () => {
  const translateY = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          translateY: withTiming(translateY.value, {
            easing: Easing.linear,
            duration: 0,
          }),
        },
      ],
    }),
    [translateY]
  );

  return (
    <AnimatedPressable
      style={[
        {
          overflow: "hidden",
          height: 36,
          paddingHorizontal: 20,
          backgroundColor: "red",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 100,
        },
        animatedStyle,
      ]}
      onPressIn={() => (translateY.value = 1)}
      onPressOut={() => (translateY.value = 0)}
    >
      <View
        style={{ backgroundColor: "purple", ...StyleSheet.absoluteFillObject }}
      />
      <Text style={{ color: "white" }}>Button</Text>
    </AnimatedPressable>
  );
};

export default Button;
