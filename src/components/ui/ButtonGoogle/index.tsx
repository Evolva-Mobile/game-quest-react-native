import { Image, TouchableOpacity, StyleSheet, Text } from "react-native"
import ImageGoogle from '@/assets/images/another/google-logo-48.png'
import { GlobalText } from "../GlobalText";
export function ButtonGoogle() {
    return (
        <TouchableOpacity style={styles.btnContainer}> 
            <GlobalText>Login com Google</GlobalText>
            <Image source={ImageGoogle} style={styles.img} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        borderRadius: 18,
        paddingHorizontal: 8,
        paddingVertical: 14,
        height: 55,
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: "#d0d5dd",
        width: "100%",
        gap: 8
    },
    img: {
        width: 30,
        height: 30,
    },
});