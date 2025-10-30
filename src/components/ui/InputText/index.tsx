import { ReactNode } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

type InputProps = {
    label: string
    icon?: string
    value?: string
    onChangeText?: (value: string) => void
}

export function InputText({ icon, label, value, onChangeText }: InputProps) {
    return (
        <View
            style={[styles.inputContainer,
            { justifyContent: icon ? "space-between" : "center" }]}>

            <Text style={styles.textLabel}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />

            {icon && (
                <Text style={{ color: "#000" }}>icone</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 14,
        borderWidth: 2,
        position: "relative",
        flexDirection: "row",
        gap: 8,
        borderColor: "#ccc"
    },
    input: {
        width: "100%"
    },
    textLabel: {
        position: "absolute",
        top: -15,
        left: 15,
        paddingVertical: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "#FFF"
    }
});