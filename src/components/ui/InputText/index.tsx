import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import colors from "@/src/utils/colors"; // seu arquivo de cores

type InputProps = {
    label: string;
    icon?: string;
} & TextInputProps;

export function InputText({ icon, label, value, onChangeText }: InputProps) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View
            style={[
                styles.inputContainer,
                {
                    justifyContent: icon ? "space-between" : "center",
                    borderColor: isFocused ? colors.primary : colors.gray60,
                },
            ]}
        >
            <Text style={styles.textLabel}>{label}</Text>

            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                onFocus={() => setIsFocused(true)} 
                onBlur={() => setIsFocused(false)}   
            />

            {icon && (
                <Text style={{ color: "#000" }}>icone</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        borderRadius: 18,
        paddingHorizontal: 20,
        height: 55,
        borderWidth: 1,
        position: "relative",
        flexDirection: "row",
        transitionDelay: ".3",
        gap: 8,
        alignItems: "center",
    },
    input: {
        flex: 1,
    },
    textLabel: {
        position: "absolute",
        top: -15,
        left: 15,
        paddingVertical: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "#FFF",
    },
});
