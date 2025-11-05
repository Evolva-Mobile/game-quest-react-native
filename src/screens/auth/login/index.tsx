import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import ImageLogin from "@/assets/images/Scenes/2x/Victory-2x.png";

import { InputText } from '@/src/components/ui/InputText';
import { PostRequest } from '@/src/config/api-request/PostRequest';
import { useAppNavigation } from '@/src/utils/navigation';
import { styles } from './style';
import { Button } from '@/src/components/ui/Button';
import { ButtonGoogle } from '@/src/components/ui/ButtonGoogle';

export type UserProps = {
    email: string;
    password: string;
};

export default function LoginScreen() {
    const navigation = useAppNavigation();
    const [user, setUser] = useState<UserProps>({
        email: "",
        password: ""
    });

    const handleSubmit = async () => {
        console.log("usuario", user);
        try {
            const response = await PostRequest("", user)
            if (response.sucess) {

            }
        } catch (error) {
            console.log("Erro ao logar na conta: ", error);
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    Acompanhe suas metas e transforme tarefas em conquistas
                </Text>
                <View style={styles.imgContainer}>
                    <Image source={ImageLogin} style={styles.imgLogin} />
                </View>
            </View>

            <View style={styles.formUser}>
                <InputText
                    label="E-mail"
                    value={user.email}
                    onChangeText={(text) => setUser({ ...user, email: text })}
                />

                <View>
                    <InputText
                        label="Senha"
                        value={user.password}
                        onChangeText={(text) => setUser({ ...user, password: text })}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
                    </TouchableOpacity>
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
                <Text>Ainda não tem uma conta? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text>Criar conta</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

