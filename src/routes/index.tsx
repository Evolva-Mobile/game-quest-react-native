import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import LoginScreen from '../screens/auth/login';

// Definindo tipos das rotas
export type RootStackParamList = {
  Login: undefined;
  Details: { itemId: number; otherParam?: string }; // com parâmetros
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#ffffff' }
      }}>
        
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
export default AppRoutes
