import { HeaderBack } from "@/src/components/layout/headerBack";
import { useAppNavigation } from "@/src/utils/navigation";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function ForgotPassword() {
    const navigation = useAppNavigation();
    return (
        <View style={styles.container}>
            <HeaderBack title={"Esqueci minha senha"} onPress={navigation.goBack} />
            <Text> Eu não sei minha senha :(</Text>
        </View>

    );
}