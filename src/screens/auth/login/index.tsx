import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import ImageLogin from "@/assets/images/Scenes/2x/Victory-2x.png"
import { InputText } from '@/src/components/ui/InputText';
import { Button } from '@/src/components/ui/Button';
import { styles } from './style';
import { PostRequest } from '@/src/config/api-request/PostRequest';
import { useNavigation } from '@react-navigation/native';

export type UserProps = {
    email: string;
    password: string;
};

export default function LoginScreen() {
    const navigation = useNavigation();
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
                <InputText
                    label="Senha"
                    value={user.password}
                    onChangeText={(text) => setUser({ ...user, password: text })}
                />
                <Button background="#000" onPress={handleSubmit}>
                    Entrar
                </Button>

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

