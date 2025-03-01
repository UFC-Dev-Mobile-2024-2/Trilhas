import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>

          <Text style={styles.companyName}>Trilhas</Text>

          <Image source={require('./assets/logo01.png')} style={styles.logo} />

          {/* Botão de Login */}
          <Button mode="contained" onPress={() => navigation.navigate('Login')} style={styles.loginButton} buttonColor="#35CC8E">
            Entrar
          </Button>

          {/* Botão de Cadastro */}
          <Button mode="text" onPress={() => navigation.navigate('Cadastro')} style={styles.signupButton} buttonColor="#F98414" textColor="black">
            Não tem uma conta? Cadastre-se
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '100%',
    padding: 80,
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  companyName: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    marginTop: 10,
    width: '100%',
  },
  signupButton: {
    marginTop: 10,
    width: '100%',
  },
});
