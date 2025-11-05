
import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { ButtonGoogle } from "@/src/components/ui/ButtonGoogle";

type userProps = {
    name: string,
    email: string
    password: string
    repeatPassword?: string
}

export default function RegisterScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = async () => {
        console.log("usuario", user);
        try {
            const response = await PostRequest("", user)
            if (response.sucess) {

            }
        } catch (error) {
            console.log("erro ao criar conta: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Comece a se divertir emquanto cumpre tarefas
                </Text>
            </View>

            <View style={styles.formUser}>
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
                    value={user.password}
                    onChangeText={(text) => setUser({ ...user, password: text })}
                />
                <View>
                    <Text style={styles.verifyPassword}>Sua senha deve conter no mínimo 6 caracteres.</Text>
                    <InputText
                        label="Repita a senha"
                        value={user.repeatPassword}
                        onChangeText={(text) => setUser({ ...user, repeatPassword: text })}
                    />
                </View>

                <View>
                    <Button background="#000" onPress={handleSubmit}>
                        Entrar
                    </Button>

                    <View style={styles.dividerContainer}>
                        <View style={styles.line} />
                        <Text style={styles.dividerText}>Ou acesse com</Text>
                        <View style={styles.line} />
                    </View>

                    <ButtonGoogle />
                </View>
            </View>


            <View style={styles.footerText}>
                <Text>Ja tem uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Entrar na conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}