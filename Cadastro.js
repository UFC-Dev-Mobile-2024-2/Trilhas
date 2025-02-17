import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const navigation = useNavigation();

  const handleCadastro = () => {
    if (!nome || !email || !senha || !confirmarSenha) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    alert(`Cadastro realizado com sucesso!\nBem-vindo, ${nome}!`);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>

          <Title style={styles.nome}>Trilhas</Title>

          <Image source={require('./assets/logo01.png')} style={styles.logo} />

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
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            secureTextEntry
          />

          <TextInput
            label="Confirmar Senha"
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
            style={styles.input}
            secureTextEntry
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
