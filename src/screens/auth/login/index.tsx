import { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import ImageLogin from "@/assets/images/principal/coin.png";

import { InputText } from '@/src/components/ui/InputText';
import { PostRequest } from '@/src/config/api-request/PostRequest';
import { useAppNavigation } from '@/src/utils/navigation';
import { styles } from './style';
import { Button } from '@/src/components/ui/Button';
import { ButtonGoogle } from '@/src/components/ui/ButtonGoogle';
import { GlobalText } from '@/src/components/ui/GlobalText';
import { USER } from '@/src/config/api-routes/user';

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
        try {
            const response = await PostRequest(USER.LOGIN(), user)
            if (response) {
                navigation.navigate('Settings')
            }
        } catch (error) {
            console.log("Erro ao logar na conta: ", error);
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.headerContainer}>
                    <Image source={ImageLogin} style={styles.img} />
                    <GlobalText variant='bold' style={styles.title}>
                        Entrar
                    </GlobalText>
                </View>

                <View style={styles.formUser}>
                    <InputText
                        label="E-mail"
                        value={user.email}
                        onChangeText={(text) => setUser({ ...user, email: text })}
                        icon={'User'}
                    />

                    <View>
                        <InputText
                            label="Senha"
                            type="password"
                            value={user.password}
                            onChangeText={(text) => setUser({ ...user, password: text })}
                            icon={'KeySquare'}
                        />

                        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                            <GlobalText variant={'semibold'} style={styles.forgotPassword}>Esqueci minha senha</GlobalText>
                        </TouchableOpacity>
                        <GlobalText />
                    </View>


                </View>
            </View>

            <View style={styles.footerContainer}>
                <Button onPress={handleSubmit} icon='Swords'>
                    Entrar
                </Button>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}  >
                    <GlobalText style={styles.linkFooterText} variant='bold'>Criar conta</GlobalText>
                </TouchableOpacity>

            </View>
        </View>
    );
}

