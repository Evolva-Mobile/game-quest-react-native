import { Image, View, Text } from "react-native";
import { useState } from "react";

import ImageLogin from "@/assets/images/Scenes/2x/Victory-2x.png"
import { Button } from "@/src/components/ui/Button";
import { InputText } from "@/src/components/ui/InputText";
import { UserProps } from "./interface";
import { styles } from "./style";

export default function LoginScreen() {

    const [user, setUser] = useState<UserProps>()
    const handleText = () => {
        console.log("tex", user);

    }
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{padding: 18, fontSize: 32, textAlign: "center", fontWeight: 500}}>Acompanahr suas metas e transforme tarefas em conquistas</Text>
            <View style={styles.imgContainer}>
                <Image source={ImageLogin} style={styles.imgLogin} />
            </View>

            <View style={styles.formUser}>
                <InputText label={"E-mail"} value={user?.user} onChangeText={() => setUser} />
                <InputText label={"Senha"} value={user?.password} onChangeText={() => setUser} />
            </View>



            <Button background={"#000"} onPress={handleText}>Entrar</Button>
        </View>
    )
}