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

          {/* Parte do meio */}
          <View style={styles.choices}>

            <View style={styles.caixas}>
              <Barra type="Selecione a trilha" />
              <Barra type="Selecione o local da trilha" />
              <Barra type="Selecione a foto do local da área de risco" />
              <Barra type="Selecione a foto de apoio local da área de risco" />
              <Barra type="Descrição do local" />
              <Barra type="Justificativa do ponto de perigo" />
            </View>

          </View>
           {/* linha */}
           <View style={styles.linhaconteiner}/>
          

          {/* Botoes de baixo */}
          <View style={styles.botoesContainer}>

            <TouchableOpacity style={styles.botaoSalvar} onPress={() => alert('Cadastro Salvo!')}>
              <Text style={styles.textoBotaoS}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botaoCancelar}>
              <Text style={styles.textoBotaoC}>Cancelar</Text>
            </TouchableOpacity>

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
  scrollContainer: {
    paddingBottom: 100, // n deixa os botões atras da navbar
  },
  content: {
    flex: 1, 
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
  choices: {
    alignItems: 'center',
  },

  caixas: {
    flexDirection: 'column',
    gap: 20,
    width: 300,
  },

  caixadentro: {
    backgroundColor: '#322F35',
    width: 300,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
  },

  linhaconteiner:{
    backgroundColor: "black",
    height: 1,
    marginTop: 60,
    
  },

  //caixa dos botoes
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'left',
    marginTop: 30,
    width: 300,

  },

  //estilos dos botoes
  botaoSalvar: {
    backgroundColor: "#65558F",
    width: 120,
    height: 45,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoCancelar: {
    borderWidth: 1, 
    borderColor: "#322F35", 
    width: 120,
    height: 45,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
   
},

  //texto dos botoes
  textoBotaoS: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoBotaoC: {
    color: "#322F35",
    fontSize: 16,
    fontWeight: "bold",
  }

});
