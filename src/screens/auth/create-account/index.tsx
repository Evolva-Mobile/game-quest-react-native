
import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { ButtonGoogle } from "@/src/components/ui/ButtonGoogle";
import { Icon } from "@/src/components/ui/Icon";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";

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
                <GlobalText variant={'medium'} style={styles.title}>
                    Comece a se divertir emquanto cumpre tarefas
                </GlobalText>
            </View>

            <View style={styles.formUser}>
                <View style={styles.firtsFilds}>
                    <InputText
                        label="Nome"
                        value={user.name}
                        onChangeText={(text) => setUser({ ...user, name: text })}
                    />
                    <InputText
                        label="E-mail"
                        value={user.email}
                        onChangeText={(text) => setUser({ ...user, email: text })}
                    />
                    <InputText
                        label="Senha"
                        type="password"
                        value={user.password}
                        onChangeText={(text) => setUser({ ...user, password: text })}
                    />
                </View>
                <View>
                    <View style={styles.verifyPasswordContainer}>
                        <Icon name="BadgeCheck" size={14} color="#d0d5dd" />
                        <GlobalText style={styles.verifyPassword}>Sua senha deve conter no mínimo 6 caracteres.</GlobalText>
                    </View>

                    <InputText
                        label="Repita a senha"
                        type="password"
                        value={user.password_confirmation}
                        onChangeText={(text) => setUser({ ...user, password_confirmation: text })}
                    />
                </View>

                <View style={styles.containerSubmit}>
                    <Button color={"secondary"} onPress={handleSubmit}>
                        Criar conta
                    </Button>

                    <View style={styles.dividerContainer}>
                        <View style={styles.line} />
                        <GlobalText style={styles.dividerText}>Ou acesse com</GlobalText>
                        <View style={styles.line} />
                    </View>

                    <ButtonGoogle />
                </View>
            </View>


            <View style={styles.footerText}>
                <GlobalText>Ja tem uma conta? </GlobalText>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <GlobalText style={styles.linkFooterText}>Entrar na conta</GlobalText>
                </TouchableOpacity>
            </View>
        </View>
    );
}