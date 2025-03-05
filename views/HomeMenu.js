import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Button, Menu, IconButton } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Navbar from '../components/Navbar';
import fontStyles from '../styles/fontStyles';

export default function HomeMenuScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf')
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.map_container}>
          <View style={styles.menu_container}>
            <SettingsButton navigation={navigation} />
          </View>
          <Image source={require('../assets/images/map.png')} style={styles.map_img} />
        </View>

        <View style={styles.button_container}>
          <StartButton />
        </View>
      </ScrollView>
      <Navbar selected={"trilhas"} navigation={navigation} />
    </View>
  );
}

const StartButton = () => (
  <Button
    mode="contained" 
    style={styles.start_button}
    labelStyle={fontStyles.m3_label_large}
    onPress={() => console.log('Iniciar')}
  >
    Iniciar
  </Button>
);

const SettingsButton = ({ navigation }) => {
  const [visible, setVisible] = useState(false);

  const handleMenuPress = (action) => {
    setVisible(false);
    action();
  };

  return (
    <Menu
      visible={visible}
      onDismiss={() => setVisible(false)}
      anchor={
        <IconButton 
          icon="cog"
          size={24}
          iconColor="#FFFFFF"
          containerColor="#65558F"
          onPress={() => setVisible(true)}
        />
      }
    >
      <Menu.Item
        onPress={() => handleMenuPress(() => navigation.navigate('CadastroTrilhaInstrucoes'))}
        title="Cadastrar Trilha"
      />
      <Menu.Item
        onPress={() => handleMenuPress(() => console.log('Cadastrar Área de Risco'))}
        title="Cadastrar Área de Risco"
      />
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    minHeight: 790,
  },

  menu_container: {
    position: 'absolute',
    top: 20,
    right: 25,
    zIndex: 1,
  },

  map_container: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: -20,
  },
  map_img: {
    width: '90%',
    resizeMode: 'contain',
    zIndex: -1,
  },

  button_container: {
    alignItems: 'center',
  },
  start_button: {
    width: 126,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});