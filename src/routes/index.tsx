import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/create-account';
import ForgotPassword from '../screens/auth/forgot-password';

// Definindo tipos das rotas
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  Details: { itemId: number; otherParam?: string }; // com parâmetros
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#FFF' }
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='Register' component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}
export default AppRoutes
