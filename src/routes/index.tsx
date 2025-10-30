import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import LoginScreen from '../screens/auth/login';

// Definindo tipos das rotas
export type RootStackParamList = {
  Login: undefined; 
  Details: { itemId: number; otherParam?: string }; // com parâmetros
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
