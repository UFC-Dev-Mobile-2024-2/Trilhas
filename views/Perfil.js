import { ScrollView, View, StyleSheet, Platform, Image, Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useFonts } from 'expo-font';
import Navbar from '../components/Navbar';
import fontStyles from '../styles/fontStyles';

export default function ProfileScreen({ navigation }) {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto-SemiBold': require('../assets/fonts/Roboto-SemiBold.ttf')
  });
  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Avatar_Profile />

        <View style={styles.user_description}>
          <Text style={fontStyles.m3_title_large}> Nome do usuário </Text>
          <Text> Membro desde 16/01 </Text>
        </View>

        <View style={styles.follow}>
          <View style={[styles.follow_data, styles.following]}>
            <Text style={fontStyles.m3_title_large}> 14 </Text>
            <Text style={fontStyles.m3_title_small}> Seguindo </Text>
          </View>
          <View style={[styles.follow_data, styles.followers]}>
            <Text style={fontStyles.m3_title_large}> 16 </Text>
            <Text style={fontStyles.m3_title_small}> Seguidores </Text>
          </View>
          <View style={[styles.follow_data, styles.trail_buddies]}>
            <Text style={fontStyles.m3_title_large}> 3 </Text>
            <Text style={fontStyles.m3_title_small}> Companheiros </Text>
            <Text style={fontStyles.m3_title_small}> de trilha </Text>
          </View>
        </View>

        <View style={styles.progress}>
          <View style={styles.progress_description}>
            <Text style={fontStyles.m3_title_medium}> Trilhas percorridas </Text>
            <Text style={fontStyles.m3_title_medium}> Distância andada </Text>
          </View>
          <View style={styles.progress_value}>
            <Text style={fontStyles.m3_title_medium}> 9 </Text>
            <Text style={fontStyles.m3_title_medium}> 22 km </Text>
          </View>
        </View>

        <View style={styles.achievements}>
          <Text style={fontStyles.m3_title_medium}> Conquistas </Text>
          <View style={styles.achievements_images}>
            <TouchableOpacity onPress={() => console.log('Conquista clicada!')}>
              <Image source={require('../assets/images/avatar_1.png')} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Conquista clicada!')}>
              <Image source={require('../assets/images/avatar_2.png')} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Conquista clicada!')}>
              <Image source={require('../assets/images/avatar_3.png')} style={{ width: 100, height: 100 }} />
              </TouchableOpacity>
          </View>
        </View>

        <View style={styles.gallery}>
          <Text style={fontStyles.m3_title_medium}> Galeria </Text>
          <View style={styles.gallery_images}>
            <TouchableOpacity onPress={() => console.log('Imagem da galeria clicada!')}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/hiking_1.png')} style={{ width: 100, height: 100 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Imagem da galeria clicada!')}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/hiking_2.png')} style={{ width: 100, height: 100 }} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Imagem da galeria clicada!')}>
              <View style={styles.imageContainer}>
                <Image source={require('../assets/images/hiking_3.png')} style={{ width: 100, height: 100 }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Navbar selected={"perfil"} navigation={navigation} />
    </View>
  );
}

const Avatar_Profile = () => (
  <Avatar.Icon 
    style={styles.avatar}
    size={120}
    icon={() => (
      <Image source={require('../assets/icons/avatar_placeholder.png')} style={{ width: 85, height: 77 }} />
    )}
  />
);

const styles = StyleSheet.create({
  /* ----- Estilização do perfil do usuário ----- */
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingBottom: 110,
  },
  
  /* Avatar e descrição */
  avatar: {
    backgroundColor: '#EADDFF',
    marginBottom: 20,
    marginTop: 50,
  },
  user_description: {
    alignItems: 'center',
    marginBottom: 30,
  },

  /* Seguindo, Seguidores e Companheiros de trilha */
  follow: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80.58%',
    marginBottom: 35,
  },
  follow_data: {
    alignItems: 'center',
  },
  followers: {
    marginLeft: 33,
    marginRight: 20.5,
  },

  /* Trilhas percorridas e Distância andada */
  progress: {
    flexDirection: 'row',
    gap: 100,
    marginBottom: 40,
  },
  progress_description: {
    gap: 10,
  },
  progress_value: {
    alignItems: 'flex-end',
    gap: 10,
  },

  /* Conquistas */
  achievements: {
    alignItems: 'center',
  },
  achievements_images: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 40,
  },

  /* Galeria */
  gallery: {
    alignItems: 'center',
  },
  gallery_images: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
    marginBottom: 40,
  },
  imageContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  }
});