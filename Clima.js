import { ScrollView, View, StyleSheet, Platform, Image, Text } from 'react-native';
import { Card } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Navbar from './components/Navbar';
import fontStyles from './styles/fontStyles';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('./assets/fonts/Roboto-SemiBold.ttf')
  });
  if (!fontsLoaded) return null;

  const weekData = [
    { date: '12', day: 'DOM', temp: '33°' },
    { date: '13', day: 'SEG', temp: '32°' },
    { date: '14', day: 'TER', temp: '33°' },
    { date: '15', day: 'QUA', temp: '33°' },
    { date: '16', day: 'QUI', temp: '33°' },
    { date: '17', day: 'SEX', temp: '31°' },
    { date: '18', day: 'SAB', temp: '31°' }
  ];
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.day_info}>
          <View style={styles.degrees}>
            <Image source={require('./assets/icons/sun.png')} style={{ width: 52, height: 52 }} />
            <Text style={fontStyles.m3_display_medium}> 31° </Text>
          </View>
          <Text style={[fontStyles.m3_headline_medium, styles.sunny]}> Ensolarado </Text>
          <Text style={[fontStyles.m3_body_medium, styles.sunny_description]}> As condições ensolaradas continuarão durante o resto do dia. </Text>
        </View>

        <View style={styles.week_info}>
          {weekData.map((day, index) => (
            <View key={index} style={styles.week_info_column}>
              <View style={styles.day_of_the_week}>
                <Text style={fontStyles.m3_title_small}> {day.date} </Text>
                <Text style={fontStyles.m3_title_small}> {day.day} </Text>
              </View>
              <View style={styles.weather_of_the_day}>
                <Image source={require('./assets/icons/sun.png')} style={{ width: 24, height: 24 }} />
                <Text style={fontStyles.m3_title_small}> {day.temp} </Text>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.general_info}>
          <View style={styles.card_line}>
            <Weather_Card type="Índice Uv" data="Baixo" />
            <Weather_Card type="Umidade" data="15%" />
          </View>
          <View style={styles.card_line}>
            <Weather_Card type="Vento" data="5 km/h" />
            <Weather_Card type="Ponto de Orvalho" data="50°" />
          </View>
          <View style={styles.card_line}>
            <Weather_Card type="Pressão" data="1010 mb" />
            <Weather_Card type="Visibilidade" data="Limitado" />
          </View>
        </View>

      </ScrollView>
      <Navbar selected={"clima"} />
    </View>
  );
}

const Weather_Card = ({ type, data }) => (
  <Card style={styles.weather_card}>
    <Card.Content>
      <Text style={fontStyles.m3_body_small_weatherCard}> {type} </Text>
      <Text style={fontStyles.m3_body_medium}> {data} </Text>
    </Card.Content>
  </Card>
);

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
  day_info: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 45,
  },
  degrees: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  sunny: {
    marginBottom: 40,
  },
  sunny_description: {
    textAlign: 'center',
    maxWidth: '90%',
  },

  /* Informações da semana */
  week_info: {
    flexDirection: 'row',
    gap: 15,
  },
  day_of_the_week: {
    alignItems: 'center',
    gap: 3,
    marginBottom: 12,
  },
  weather_of_the_day: {
    alignItems: 'center',
    gap: 5,
    marginBottom: 55,
  },

  /* Informações gerais */
  general_info: {
    gap: 20,
  },
  weather_card: {
    backgroundColor: '#938F99',
    width: 137,
    height: 73,
  },
  card_line: {
    flexDirection: 'row',
    gap: 20,
  },
});