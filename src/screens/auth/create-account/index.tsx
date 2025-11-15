
import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import Img from "@/assets/images/principal/trumpet.png";
import { useState } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { Icon } from "@/src/components/ui/Icon";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { colors } from "@/src/styles/theme";

type userProps = {
    name: string,
    email: string
    password: string
    password_confirmation: string
}

export default function RegisterScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleSubmit = async () => {
        try {
            const response = await PostRequest(USER.REGISTER(), user)
            if (response) {
                console.log("conta criada");
                navigation.navigate('Login')
            }
        } catch (error) {
            console.log("erro ao criar conta: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Image source={Img} style={styles.img} />
                    <GlobalText variant='bold' style={styles.title}>
                        Criar conta
                    </GlobalText>
                </View>

                <View style={styles.formUser}>
                    <View style={styles.firtsFilds}>
                        <InputText
                            label="Nome"
                            value={user.name}
                            onChangeText={(text) => setUser({ ...user, name: text })}
                            icon={"User"} />
                        <InputText
                            label="E-mail"
                            value={user.email}
                            onChangeText={(text) => setUser({ ...user, email: text })} 
                            icon={"Mailbox"} />
                        <InputText
                            label="Senha"
                            type="password"
                            value={user.password}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            icon={"KeySquare"} />
                    </View>
                    <View>
                        <View style={styles.verifyPasswordContainer}>
                            <Icon name="BadgeAlert" size={22} color={colors.gray100} />
                            <GlobalText style={styles.verifyPassword} variant="medium">Sua senha deve conter no mínimo 8 caracteres.</GlobalText>
                        </View>

                        <InputText
                            label="Repita a senha"
                            type="password"
                            value={user.password_confirmation}
                            onChangeText={(text) => setUser({ ...user, password_confirmation: text })}
                            icon={"Repeat"} />
                    </View>
                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button color={"secondary"} onPress={handleSubmit}>
                    Criar conta
                </Button>

                <TouchableOpacity onPress={() => navigation.goBack()}  >
                    <GlobalText style={styles.linkFooterText} variant='bold'>Voltar</GlobalText>
                </TouchableOpacity>

            </View>
        </View>
    );
}