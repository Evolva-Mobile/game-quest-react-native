import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    containerLogin: {
        flexDirection: "column", 
        justifyContent: "space-between"
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
        gap: 28,
        flexDirection: 'column'
    },
    formButton: {
        gap: 16,
        justifyContent: "center",
        alignItems: "center"
    },
    textAnother: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 14,
        width: "100%",
    }
});