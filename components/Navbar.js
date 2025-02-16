import { View, StyleSheet, Image, Text } from 'react-native';
import { useFonts } from 'expo-font';
import fontStyles from '../styles/fontStyles';

export default function Navbar() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf')
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.navBar}>
      <View style={styles.navItem}>
        <Image source={require('../assets/icons/road.png')} style={{ width: 32.4, height: 33.6 }} />
        <Text style={fontStyles.m3_label_medium_navbar}> Trilhas </Text>
      </View>
      <View style={styles.navItem}>
        <Image source={require('../assets/icons/cloudy.png')} style={{ width: 33.6, height: 33.6 }} />
        <Text style={fontStyles.m3_label_medium_navbar}> Clima </Text>
      </View>
      <View style={styles.navItem}>
        <View style={styles.profileBackground} />
        <Image source={require('../assets/icons/profile.png')} style={{ width: 26.8, height: 26.8, marginTop: 5 }} />
        <Text style={fontStyles.m3_label_medium_prominent_navbar}> Perfil </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3EDF7',
    width: '100%',
    height: 80,
    gap: 60,

    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  navItem: {
    alignItems: 'center',
    gap: 6,
  },
  profileBackground: {
    position: 'absolute',
    width: 83.6,
    height: 38,
    backgroundColor: '#E8DAF8',
    borderRadius: 27.2,
  }
});