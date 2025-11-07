
import { InputText } from "@/src/components/ui/InputText";
import { PostRequest } from "@/src/config/api-request/PostRequest";
import { useAppNavigation } from "@/src/utils/navigation";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Button } from "@/src/components/ui/Button";
import { USER } from "@/src/config/api-routes/user";
import { GlobalText } from "@/src/components/ui/GlobalText";
import { HeaderBack } from "@/src/components/layout/headerBack";
import { Icon } from "@/src/components/ui/Icon";
import { colors } from "@/src/styles/theme";

export default function SettingsUserScreen() {
    const navigation = useAppNavigation();

    return (
        <View style={styles.container}>
            <HeaderBack title={"Configurações"}  onPress={navigation.goBack}/>

            <View style={styles.containerSettings}>
                <GlobalText style={styles.textLabel}>Configurações</GlobalText>
                <View style={styles.settingsList}>
                    <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('EditUser')}>
                        <GlobalText>Editar conta</GlobalText>
                        <Icon name={'ChevronRight'} size={20} />
                    </TouchableOpacity>
                    <View style={styles.itemList}>
                        <GlobalText >Tema</GlobalText>
                        <Icon name={'Moon'} size={20} color={colors.secondary} />
                    </View>
                    <View style={styles.itemList}>
                        <GlobalText style={{ color: colors.red100 }}>Sair</GlobalText>
                        <Icon name={'DoorClosed'} size={20} color={colors.red100} />
                    </View>
                </View>


            </View>
        </View>
    );
}