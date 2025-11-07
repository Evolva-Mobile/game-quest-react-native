import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'space-between',
    },

    title: {
        paddingVertical: 18,
        paddingHorizontal: 8,
        fontSize: 32,
        width: "100%",
        textAlign: 'center',
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
        gap: 20,
        flexDirection: 'column'
    },

    firtsFilds: {
        gap: 25
    },

    verifyPasswordContainer: {
        flexDirection: 'row',
        marginBottom: 30,
        gap: 6,
        alignItems: 'center'
    },

    verifyPassword: {
        color: colors.neutral80
    },

    containerSubmit: {
        marginTop: 10
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
    },
    linkFooterText:{
        color: colors.primary
    }

});