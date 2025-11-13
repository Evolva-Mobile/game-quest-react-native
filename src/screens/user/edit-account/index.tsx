
import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { HeaderBack } from "@/src/components/layout/headerBack";



type userProps = {
    name: string,
    email: string
    password: string
    password_confirmation: string
}

export default function EditUserScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<userProps>({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    })

    const handleSubmit = async () => {
        console.log("usuario", user);
        try {
            const response = await PostRequest(USER.UPDATE(''), user)
            if (response.sucess) {
                console.log("conta criada");
                navigation.navigate('Login')
            }
        } catch (error) {
            console.log("erro ao criar conta: ", error);
        }
    }

    return (
        <View style={styles.container}>
            <HeaderBack title={"Editar conta"} onPress={navigation.goBack}/>
            <View>
                <GlobalText variant={'medium'} style={styles.title}>
                    Dados pessoais
                </GlobalText>
            </View>
            <View style={styles.containerForm}>
                <View style={styles.formUser}>
                    <View>
                        <Image></Image>
                    </View>
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

                <Button onPress={handleSubmit}>
                    Salvar dados
                </Button>
            </View>
        </View>
    );
}