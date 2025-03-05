import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './Home.js';
import LoginScreen from './Login.js';
import RegisterScreen from './Cadastro.js';
import HomeMenuScreen from './HomeMenu.js';
import WeatherScreen from './Clima.js';
import ProfileScreen from './Perfil.js';
import TrilhaRegisterScreen from './CadastroTrilha.js';
import InstructionsScreen from './CadastroTrilhaInstrucoes.js';
import AnalysisScreen from './CadastroTrilhaAnalise.js';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Cadastro" component={RegisterScreen} />
          <Stack.Screen name="HomeMenu" component={HomeMenuScreen} />
          <Stack.Screen name="Clima" component={WeatherScreen} />
          <Stack.Screen name="Perfil" component={ProfileScreen} />
          <Stack.Screen name="CadastroTrilha" component={TrilhaRegisterScreen} />
          <Stack.Screen name="CadastroTrilhaAnalise" component={AnalysisScreen} />
          <Stack.Screen name="CadastroTrilhaInstrucoes" component={InstructionsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}