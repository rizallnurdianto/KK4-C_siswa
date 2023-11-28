import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Register({ navigation }) {
  const handleHomeScreen = () => {
    navigation.navigate('Home'); 
  }

  const handleLoginScreen = () => {
    navigation.navigate('Login'); 
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerContainer}>Register your account</Text>
      <View style={styles.textInputContainer}>
        <View style={styles.textInputUsername}>
          <Feather name="user" size={24} color="black" />
          <TextInput placeholder="Email atau no.telepon" />
        </View>
        <View style={styles.textInputUsername}>
          <Feather name="unlock" size={24} color="black" />
          <TextInput placeholder="Masukan Password" />
        </View>
        <View style={styles.textInputUsername}>
          <Feather name="lock" size={24} color="black" />
          <TextInput placeholder="Konfirmasi Password" />
        </View>
      </View>

      <Text style={styles.forgotPassword}>Strength <Text style={styles.innerText}>bad!</Text></Text>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnLogin} onPress={handleHomeScreen}>
          <Text style={styles.textBtn}>Register</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.continueWith1Text}>Continue With</Text>
        </View>
      </View>

      <View style={styles.btnContainerMedsos}>
        <TouchableOpacity style={styles.btnMedsos}>
          <Image source={require('../../assets/google.png')}/>
          <Text style={styles.textMedsos}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMedsos}>
          <Image source={require('../../assets/facebook.png')}/>
          <Text style={styles.textMedsos}>facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Have an accpunt?</Text>
        <TouchableOpacity onPress={handleLoginScreen}>
          <Text style={styles.footerBtnContainer}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}