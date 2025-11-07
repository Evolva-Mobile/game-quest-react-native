import { colors } from "@/src/styles/theme";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { Icon } from "../Icon";
import { GlobalText } from "../GlobalText";


type InputProps = {
    label: string;
    icon?: string;
    type?: string | "password"
} & TextInputProps;

export function InputText({ icon, label, value, onChangeText, type }: InputProps) {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [show, setShow] = useState<boolean>(false);

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
            <GlobalText style={styles.textLabel}>{label}</GlobalText>
            {type === "password" ? (
                <>
                    <TextInput
                        style={styles.input}
                        value={value}
                        secureTextEntry={!show}
                        onChangeText={onChangeText}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                    <TouchableOpacity onPress={() => setShow(!show)}>
                        {!show ? <Icon name="Eye" size={18} /> : <Icon name="EyeOffIcon" size={18} />}
                    </TouchableOpacity>

                </>
            ) : (
                <TextInput
                    style={styles.input}
                    value={value}
                    onChangeText={onChangeText}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
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
        top: -12,
        left: 15,
        paddingVertical: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: "#FFF",
    },
});
