import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleCadastro = () => {
    if (!nome || !email || !password || !confirmPassword) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    if (password !== confirmPassword) {
      alert('As senhas não coincidem!');
      return;
    }
    alert(`Cadastro realizado com sucesso!\nBem-vindo, ${nome}!`);
   
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>

          <Title style={styles.nome}>Trilhas</Title>

          <Image source={require('../assets/icons/logo.png')} style={styles.logo} />

          <TextInput
            label="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />

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

          <TextInput
            label="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry={!confirmPasswordVisible}
            right={
              <TextInput.Icon 
                icon={confirmPasswordVisible ? 'eye-off' : 'eye'}
                onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              />
            }
          />

          <Button mode="contained" onPress={handleCadastro} style={styles.button}>
            Cadastrar
          </Button>

          <Button mode="text" onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
            Já possui cadastro? Entre aqui
          </Button>
        </Card.Content>
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

  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 10,
    alignSelf: 'center',
  },

  nome: {
    marginBottom: 20,
    fontSize: 50,
    textAlign: 'center',
    lineHeight: 52,
    fontWeight: 'bold',

  },

  input: {
    marginBottom: 10,
  },

  button: {
    marginTop: 10,
  },
});