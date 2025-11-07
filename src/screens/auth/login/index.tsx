import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import ImageLogin from "@/assets/images/Scenes/2x/Victory-2x.png";

import { InputText } from '@/src/components/ui/InputText';
import { PostRequest } from '@/src/config/api-request/PostRequest';
import { useAppNavigation } from '@/src/utils/navigation';
import { styles } from './style';
import { Button } from '@/src/components/ui/Button';
import { ButtonGoogle } from '@/src/components/ui/ButtonGoogle';
import { GlobalText } from '@/src/components/ui/GlobalText';

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
                <GlobalText variant='medium' style={styles.title}>
                    Acompanhe suas metas e transforme tarefas em conquistas
                </GlobalText>
                
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
                        type="password"
                        value={user.password}
                        onChangeText={(text) => setUser({ ...user, password: text })}
                    />
                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <GlobalText style={styles.forgotPassword}>Esqueci minha senha</GlobalText>
                    </TouchableOpacity>
                    <GlobalText />
                </View>

                <View>
                    <Button onPress={handleSubmit}>
                        Entrar
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
                <GlobalText>Ainda não tem uma conta? </GlobalText>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <GlobalText style={styles.linkFooterText}>Criar conta</GlobalText>
                </TouchableOpacity>
            </View>
        </View>
    );
}

