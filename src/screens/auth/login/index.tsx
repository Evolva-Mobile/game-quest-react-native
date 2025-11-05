import { Image, View, Text, ScrollView } from "react-native";
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
        <ScrollView style={{ flex: 1, padding: 16 }}>
            <View style={styles.containerLogin}>
                <View>
                    <Text style={{ padding: 18, fontSize: 32, textAlign: "center", fontWeight: 500 }}>Acompanahr suas metas e transforme tarefas em conquistas</Text>
                    <View style={styles.imgContainer}>
                        <Image source={ImageLogin} style={styles.imgLogin} />
                    </View>
                </View>

                <View>
                    <View style={styles.formUser}>
                        <InputText label={"E-mail"} value={user?.user} onChangeText={() => setUser} />
                        <InputText label={"Senha"} value={user?.password} onChangeText={() => setUser} />
                    </View>

                    <View style={styles.formButton}>
                        <Button background={"#ff6b6b"} onPress={handleText}>Entrar</Button>
                        <View
                            style={styles.textAnother}
                        >
                            <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
                            <Text style={{ marginHorizontal: 8, color: "#8a8a8a" }}>Ou acesse com</Text>
                            <View style={{ flex: 1, height: 1, backgroundColor: "#ccc" }} />
                        </View>
                        <Button background={"#000"} onPress={handleText}>Entrar</Button>
                    </View>

                    <View style={{ justifyContent: "center", flexDirection: "row", gap: 12, marginTop: 12 }}>
                        <Text>Ainda não tem uma conta?</Text>
                        <Text style={{ color: "#ff6b6b" }}>Crair Conta</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}