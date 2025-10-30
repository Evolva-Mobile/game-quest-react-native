import { ReactNode } from "react"
import { TouchableOpacity, StyleSheet, Text } from "react-native"
type ButtonProps = {
    text?: string
    background: string
    children: ReactNode
    icon?: string
    onPress?: () => void
}
export function Button({ children, background, icon, onPress}: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.btnContainer,
        {
            backgroundColor: background,
            justifyContent: icon ? "space-around" : "center"
        }]}
        onPress={onPress}
        > 
            <Text style={styles.text}>{children}</Text>
            {icon && (
                <Text style={{ color: "#fff" }}>icone</Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 18,
        paddingHorizontal: 8,
        paddingVertical: 14,
        height: 55,
        flexDirection: "row",
        alignItems: 'center',
        gap: 8
    },
    text: {
        textAlign: "center",
        color: '#fff',
    },
});