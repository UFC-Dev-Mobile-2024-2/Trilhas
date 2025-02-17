import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    if (email && password) {
      alert(`Bem-vindo, ${email}!`);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>

          <Title style={styles.nome}>Trilhas</Title>

          <Image source={require('./assets/logo01.png')} style={styles.logo} />

          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            label="Senha"
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
          />

          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Entrar
          </Button>
        </Card.Content>

        <Button mode="text" onPress={() => navigation.navigate('Cadastro')} style={styles.cadastroButton}>
          Não tem uma conta? Cadastre-se
        </Button>
      </Card>
    </View>
  );
}

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
    padding: 20,
  },

  nome: {
    marginBottom: 20,
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 52,
    fontWeight: 'bold',
  },

  logo: {
    width: 250,
    height: 250,
    marginBottom: 10,

    alignSelf: 'center'
  },

  input: {
    marginBottom: 10,
  },

  button: {
    marginTop: 10,
  },
});
