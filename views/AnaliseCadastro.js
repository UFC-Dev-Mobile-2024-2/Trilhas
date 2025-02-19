import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Navbar from '../components/Navbar';
import fontStyles from '../styles/fontStyles';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf')
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>  

          {/* Parte de cima */}
          <View style={styles.upnavbar}> 

            <Text style={[fontStyles.m3_headline_medium, { fontSize: 20 }]}>Cadastro de Trilha</Text>
            <Image source={require('../assets/icons/containerX.png')} style={{ width: 20, height: 50 }} />

          </View>

          {/* Pop-up */}
          <View style={styles.popup}>

            <View style={styles.caixas}>

              {/* titulo */}
              <Text style={[fontStyles.m3_headline_bold, { fontSize: 20, marginBottom: 10 }]}> Análise </Text>

              {/* mensagem */}
              <Text style={[fontStyles.m3_body_medium, { fontSize: 12 ,textAlign: 'center', marginBottom: 20 }]}>
                Seu pedido foi recebido, estaremos analisando ele o mais rápido possível para mantermos a segurança de todos. 
              </Text>

              {/* confirmar */}
              <TouchableOpacity style={styles.botaoConfirmar} >
                <Text style={styles.textoBotaoConfirmar}>Confirmar</Text>
              </TouchableOpacity>

            </View>

          </View>

        </View>

      </ScrollView>

      <Navbar selected={"trilhas"} />
    </View>
  );
}

// Componente Card
const Barra = ({ type }) => (
  <Card style={styles.caixadentro}>
    <Card.Content>
      <Text style={fontStyles.m3_body_small_weatherCard}>{type}</Text>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
 

  //cabeçalho
  upnavbar: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    marginTop: 60,
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  //Opções
  popup: {
    alignItems: 'center',
  },

  caixas: {
    flexDirection: 'column',
    gap: 20,
    width: 300,
    padding: 20, 
    backgroundColor: '#F0F0F0', 
    borderRadius: 10, 
    alignItems: 'center', 
  },

  caixadentro: {
    backgroundColor: '#322F35',
    width: 300,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },

  // Estilos do botao
  botaoConfirmar: {
  padding: 20,
    paddingVertical: 10,
    width: 300,
    alignItems: 'flex-end',
    
    
  },
  textoBotaoConfirmar: {
    color: '#65558F',
    fontSize: 12,
    fontWeight: 'bold',
  },
});