import React, { useState } from 'react';
import { View, StyleSheet, Image, Alert } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import axios from 'axios'; 

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = async () => {
    if(!email || !password) {
      Alert.alert('Erro','Por favor, preencha todos os campos!');
      return
    }

    try { 
      const response = await axios.post('https://reqres.in/api/login',{
        email,
        password
      });

      // Se o login for bem-sucedido, recebemos um token
      Alert.alert('Sucesso', 'Login realizado com sucesso!');
      console.log('Token:', response.data.token);
      
      // Redireciona para a Home após o login
      navigation.navigate('HomeMenu');

    } catch(error) {
      Alert.alert('Erro', 'Credenciais inválidas! Verifique seu email e senha.');
      console.log('Erro:', error.response?.data || error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>

          <Title style={styles.nome}>Trilhas</Title>

          <Image source={require('../assets/icons/logo.png')} style={styles.logo} />

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
            secureTextEntry={!passwordVisible}
            right={
              <TextInput.Icon 
                icon={passwordVisible ? 'eye-off' : 'eye'}
                onPress={() => setPasswordVisible(!passwordVisible)}
              />
            }
          />

          <Button mode="contained" onPress={handleLogin} style={styles.button} buttonColor="#35CC8E">
            Entrar
          </Button>
        </Card.Content>

        <Button mode="text" onPress={() => navigation.navigate('Cadastro')} style={styles.cadastroButton} textColor="#F98414">
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