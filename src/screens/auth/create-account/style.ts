import { StyleSheet } from 'react-native'
import { colors } from "@/src/styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },

    title: {
        padding: 18,
        fontSize: 32,
        textAlign: 'center',
        fontWeight: '500',
    },

    imgContainer: {
        alignItems: 'center'
    },

    imgLogin: {
        width: 205,
        height: 205,
    },

    formUser: {
        paddingVertical: 20,
        gap: 25,
        flexDirection: 'column'
    },

    verifyPassword: {
        marginBottom: 20
    }, 

    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '100%',
    },

    dividerText: {
        marginHorizontal: 10,
        fontSize: 14,
        color: colors.neutral80
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: "#b9bfcb",
    },

    footerText: {
        flexDirection: "row",
        gap: 4,
        justifyContent: "center"
    }

});