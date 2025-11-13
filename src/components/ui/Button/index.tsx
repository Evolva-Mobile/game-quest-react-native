import { ReactNode } from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
import { GlobalText } from "../GlobalText"
import { colors } from "@/src/styles/theme";

type ButtonProps = {
  children: ReactNode;
  color?: "primary" | "secondary" | string;
  icon?: string;
  onPress?: () => void;
};


export function Button({
  children,
  color = "primary",
  icon,
  onPress,
}: ButtonProps) {

  const backgroundColor = colors[color as "primary" | "secondary"] ?? color;

  return (
    <TouchableOpacity
      style={[
        styles.btnContainer,
        {
          backgroundColor,
          justifyContent: icon ? "space-between" : "center",
        },
      ]}
      onPress={onPress}
    >
      <GlobalText style={styles.text}>{children}</GlobalText>

      {icon && <Text style={{ color: "#fff" }}>icone</Text>}
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 50,
        paddingHorizontal: 8,
        paddingVertical: 14,
        height: 70,
        flexDirection: "row",
        alignItems: 'center',
        gap: 8,
        width: "100%"
    },
    text: {
        textAlign: "center",
        color: '#fff',
    },
});