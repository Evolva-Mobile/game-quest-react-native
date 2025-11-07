

import ImageInitial from "@/assets/images/Scenes/2x/Victory-2x.png";
import { Button } from "@/src/components/ui/Button";
import { useState } from "react";
import { Image, Text, View } from "react-native";
import { styles } from '../auth/login/style';


export default function PageInitial() {
    const [step, setStep] = useState(1);
    const renderCurrentPage = () => {
        switch (step) {
            case 1:
                return (
                    <> 
                        <View style={styles.imgContainer}>
                        <Image source={ImageInitial} style={styles.imgInitial} />
                        </View>
                        <Text>1</Text>
                        <Button background={"#000"}onPress={ () => setStep(2) } >
                        Aperte aqui
                        </Button>
                    </>
                );
            case 2:
                return (
                    <>
                        <View style={styles.imgContainer}>
                        <Image source={ImageInitial} style={styles.imgInitial} />
                        </View>
                        <Text>2</Text>
                        <Button background={"#000"}onPress={ () => setStep(3) } >
                        Aperte aqui
                        </Button>
                    </>
                );
            case 3:
                return (
                    <>
                        <View style={styles.imgContainer}>
                        <Image source={ImageInitial} style={styles.imgInitial} />
                        </View>
                        <Text>3</Text>
                        <Button background={"#000"} >
                        Aperte aqui
                        </Button>
                    </>     
            );
            default:
                return null;
        }
    }


return (
    <View style={{ flex: 1, padding: 16 }}>
        {renderCurrentPage()}
    </View>
)
}