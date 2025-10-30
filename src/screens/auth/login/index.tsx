import { View } from "react-native";
import { useState } from "react";

import { Button } from "@/src/components/ui/Button";
import { InputText } from "@/src/components/ui/InputText";

export default function LoginScreen() {

    const [text, setText] = useState<string>("")
    const handleText = () => {
        console.log("tex", text);
        console.log("expo install react-native-gesture-handler react-native-reanimated");

    }
    return (
        <View style={{ gap: 55 }}>

            <Button background={"#000"} onPress={handleText}>
                tste
            </Button>

            <InputText icon={"sas"} label={"teste"} value={text} onChangeText={setText} />

        </View>
    )
}