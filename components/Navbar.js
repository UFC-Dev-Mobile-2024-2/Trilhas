import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import fontStyles from '../styles/fontStyles';

const Navbar = (props) => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf')
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => props.navigation.navigate('HomeMenu')}>
        <View>
          {props.selected === "trilhas" ? (
            <View style={styles.navItem}>
              <View style={styles.selectedBackground} />
              <Image source={require('../assets/icons/road.png')} style={{ width: 27, height: 28 }} />
              <Text style={fontStyles.m3_label_medium_prominent_navbar}> Trilhas </Text>
            </View>
          ) : (
            <View style={styles.navItem}>
              <Image source={require('../assets/icons/road.png')} style={{ width: 27, height: 28 }} />
              <Text style={fontStyles.m3_label_medium_navbar}> Trilhas </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Clima')}>
        <View>
          {props.selected === "clima" ? (
            <View style={styles.navItem}>
              <View style={styles.selectedBackground} />
              <Image source={require('../assets/icons/cloudy.png')} style={{ width: 28, height: 28 }} />
              <Text style={fontStyles.m3_label_medium_prominent_navbar}> Clima </Text>
            </View>
          ) : (
            <View style={styles.navItem}>
              <Image source={require('../assets/icons/cloudy.png')} style={{ width: 28, height: 28 }} />
              <Text style={fontStyles.m3_label_medium_navbar}> Clima </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Perfil')}>
        <View>
          {props.selected === "perfil" ? (
            <View style={styles.navItem}>
              <View style={styles.selectedBackground} />
              <Image source={require('../assets/icons/profile.png')} style={{ width: 24, height: 24, marginTop: 5 }} />
              <Text style={fontStyles.m3_label_medium_prominent_navbar}> Perfil </Text>
            </View>
          ) : (
            <View style={styles.navItem}>
              <Image source={require('../assets/icons/profile.png')} style={{ width: 24, height: 24, marginTop: 5 }} />
              <Text style={fontStyles.m3_label_medium_prominent}> Perfil </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
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
    gap: 64,

    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  navItem: {
    alignItems: 'center',
    gap: 6,
  },
  selectedBackground: {
    position: 'absolute',
    width: 79.2,
    height: 36,
    backgroundColor: '#E8DAF8',
    borderRadius: 27.2,
  }
});

export default Navbar;