import { ScrollView, View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Navbar from '../components/Navbar';
import fontStyles from '../styles/fontStyles';

export default function InstructionsScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf')
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.conteudo}>
          <View style={styles.topo}>
            <Image source={require('../assets/icons/cenario.png')} style={{ width: 180, height: 180 }} />
          </View>

          <View style={styles.titulo}>
            <Text style={[fontStyles.m3_headline_bold, { fontSize: 20 }]}>
              Instruções
            </Text>
          </View>

          <View style={styles.subtitulo}>
            <Text style={[fontStyles.m3_headline_medium, { fontSize: 20 }]}>
              Escolha o nome da trilha
            </Text>
          </View>

          <View style={styles.texto}>
            <Text style={[fontStyles.m3_headline_medium, { fontSize: 13, textAlign: 'center' }]}>
              Dê um nome para a trilha que você quer cadastrar. Escolha algo que a identifique facilmente, como "Trilha do Pico" ou "Caminho das Cachoeiras".
            </Text>
          </View>
        </View>

        {/* Botoes */}
        <View style={styles.botaoContainer}>
          <TouchableOpacity
            style={styles.botaoSeguir}
            onPress={() => navigation.navigate('CadastroTrilha')}
          >
            <Text style={styles.textoBotao}>Próximo</Text>
          </TouchableOpacity>
        </View>

        {/* Pontinhos de paginação */}
        <View style={styles.paginacao}>
          <View style={[styles.ponto, styles.pontoAtivo]} />
          <View style={styles.ponto} />
          <View style={styles.ponto} />
          <View style={styles.ponto} />
          <View style={styles.ponto} />
        </View>
      </ScrollView>
      <Navbar selected={"trilhas"} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  /* ----- Estilização do perfil do usuário ----- */
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 150,
  },

  /* Informações do dia */
  conteudo: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 45,
  },
  topo: {
    flexDirection: 'flex',
    marginBottom: 3,
    padding: 10,
    paddingBottom: 20,
  },
  subtitulo: {
    padding: 20,
  },
  texto: {
    paddingHorizontal: 40,
    alignItems: 'center',
  },

  /* Estilo do botão */
  botaoContainer: {
    position: 'absolute', // Posiciona o botão absolutamente
    bottom: 100,
    // right: 20,
  },
  botaoSeguir: {
    borderWidth: 1,
    borderBlockColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBotao: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Estilo dos pontinhos de paginação */
  paginacao: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Posiciona os pontinhos absolutamente
    bottom: 60, // Distância do fundo da tela
    left: 0,
    right: 0,
  },
  ponto: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#D3D3D3', // Cor dos pontinhos inativos
    marginHorizontal: 5,
  },
  pontoAtivo: {
    backgroundColor: 'black', // Cor do pontinho ativo
  },
});