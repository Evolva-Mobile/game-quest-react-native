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
        fontSize: 42,
        width: "100%",
        textAlign: 'center',
    },
    imgContainer: {
        alignItems: 'center',
        justifyContent: "center"
    },
    imgLogin: {
        width: 205,
        height: 205,
    },
    formUser: {
        paddingVertical: 20,
        gap: 18,
        flexDirection: 'column'
    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: 16,
        fontSize: 14,
        paddingRight: 4,
        color: colors.neutral80
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
    linkFooterText: {
        color: colors.primary
    }

});