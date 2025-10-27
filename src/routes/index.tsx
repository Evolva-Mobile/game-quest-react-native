import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  RouteProp,
} from "@react-navigation/native";

import Login from "../screens/auth/login";
import CreateAccount from "../screens/auth/create-account";


export interface ParamsScreen {
  token: string;
}

export interface ParamsNumberScreen {
  id: number;
}


export type RootStackParamList = {
  Login: undefined;
  CreatAccount: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

export default function AppRoutes() {

  return (
    <SafeAreaView style={styles.safeArea}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreatAccount" component={CreateAccount} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});



