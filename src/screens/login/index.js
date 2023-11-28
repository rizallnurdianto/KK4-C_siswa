  import { StatusBar } from 'expo-status-bar';
  import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
  import { Feather } from '@expo/vector-icons';

  import styles from './styles';

  export default function Login({ navigation }) {
    const handleHomeScreen = () => {
      navigation.navigate('Home'); 
    }

    const handleRegisterScreen = () => {
      navigation.navigate('Register'); 
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headerContainer}>Login to Your Account</Text>
        <View style={styles.textInputContainer}>
          <View style={styles.textInputUsername}>
            <Feather name="user" size={24} color="black" />
            <TextInput placeholder="Email atau username" />
          </View>
          <View style={styles.textInputUsername}>
            <Feather name="lock" size={24} color="black" />
            <TextInput placeholder="Masukan Pasword" />
          </View>
        </View>

        <Text style={styles.forgotPassword}>Forgot Password!</Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnLogin} onPress={handleHomeScreen}>
            <Text style={styles.textBtn}>Login</Text>
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
          <Text style={styles.footerText}>Don't have account?</Text>
          <TouchableOpacity onPress={handleRegisterScreen}>
            <Text style={styles.footerBtnContainer}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }