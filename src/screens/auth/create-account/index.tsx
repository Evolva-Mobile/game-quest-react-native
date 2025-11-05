import { View, Text } from "react-native";
import { styles } from "./style";
import { InputText } from "@/src/components/ui/InputText";
import { Button } from '@/src/components/ui/Button';
import { useState } from "react";
import { PostRequest } from "@/src/config/api-request/PostRequest";

type userProps = {
    name: string,
    email: string
    password: string
    teste?: string
}

export default function CreateAccount() {
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
                    Acompanhe suas metas e transforme tarefas em conquistas
                </Text>
            </View>

            <View style={styles.formUser}>
                <InputText
                    label="E-mail"
                    value={user.name}
                    onChangeText={(text) => setUser({ ...user, name: text })}
                />
                <InputText
                    label="Senha"
                    value={user.password}
                    onChangeText={(text) => setUser({ ...user, password: text })}
                />
                <InputText
                    label="E-mail"
                    value={user.email}
                    onChangeText={(text) => setUser({ ...user, email: text })}
                />
                <InputText
                    label="E-mail"
                    value={user.teste}
                    onChangeText={(text) => setUser({ ...user, teste: text })}
                />
                <Button background="#000" onPress={handleSubmit}>
                    Entrar
                </Button>
            </View>
        </View>
    );
}