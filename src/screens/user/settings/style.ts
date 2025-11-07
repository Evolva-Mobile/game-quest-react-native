import { colors } from "@/src/styles/theme";
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    containerForm: {
        flex: 1,
        justifyContent: 'space-between',
    },

    containerSettings: {
        borderRadius: 18,
        marginTop: 25,
        padding: 20,
        borderWidth: 1,
        position: "relative",
        alignItems: "center",
        borderColor: colors.gray60,
    },
    textLabel: {
        position: "absolute",
        top: -12,
        left: 25,
        paddingVertical: 2,
        borderRadius: 8,
        fontSize: 13,
        paddingHorizontal: 8,
        backgroundColor: "#FFF",
    },
    settingsList:{
        width: '100%',
    },
    itemList:{
        flexDirection: 'row',
        padding: 16,
        borderBottomColor: colors.gray60,
        borderBottomWidth: 1,
        justifyContent: 'space-between'
    }
});