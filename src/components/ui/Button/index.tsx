import { ReactNode, useRef } from "react"
import { Pressable, StyleSheet, Animated } from "react-native"
import { GlobalText } from "../GlobalText"
import { colors } from "@/src/styles/theme";
import { Icon } from "../Icon";
import * as Icons from "lucide-react-native";

type ButtonProps = {
  children: ReactNode;
  color?: "primary" | "secondary" | string;
  icon?: keyof typeof Icons;
  onPress?: () => void;
};

export function Button({
  children,
  color = "primary",
  icon,
  onPress,
}: ButtonProps) {

  const backgroundColor = colors[color as "primary" | "secondary"] ?? color;

  const translate = useRef(new Animated.Value(0)).current;
  const border = useRef(new Animated.Value(4)).current;

  const onPressIn = () => {
    Animated.spring(translate, {
      toValue: 4,
      useNativeDriver: true,
      speed: 20,
      bounciness: 0,
    }).start();

    Animated.spring(border, {
      toValue: 0,
      useNativeDriver: false,
      speed: 20,
      bounciness: 0,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(translate, {
      toValue: 0,
      useNativeDriver: true,
      speed: 50,
      bounciness: 0,
    }).start();

    Animated.spring(border, {
      toValue: 4,
      useNativeDriver: false,
      speed: 50,
      bounciness: 0,
    }).start();
  };


  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={{ width: "100%" }}
    >
      <Animated.View
        style={[
          styles.btnContainer,
          {
            backgroundColor,
            borderBlockColor: color === "primary" ? colors.yellow100 : colors.brown100,
            justifyContent: icon ? "space-between" : "center",
            transform: [{ translateY: translate }],
            borderBottomWidth: border,
          },
        ]}
      >
        <GlobalText variant={"bold"} style={[styles.text, { color: color === "primary" ? colors.neutral100 : colors.withe100 }]}>{children}</GlobalText>

        {icon && <Icon name={icon} color={color === "primary" ? colors.neutral100 : colors.withe100} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 50,
    paddingHorizontal: 30,
    paddingVertical: 14,
    height: 70,
    flexDirection: "row",
    alignItems: 'center',
    gap: 8,
    width: "100%"
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});
