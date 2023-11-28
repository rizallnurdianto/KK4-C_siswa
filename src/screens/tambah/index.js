import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

import BtnPrimary from '../../components/btnPrimary';

import styles from './styles';

export default function Tambah({ navigation }) {
    const handleAddScreen = () => {
        navigation.navigate('Home');
     }

    return (
        <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.headerGroup} onPress={handleAddScreen}>
          <Feather style={styles.iconLeft} name="chevron-left" size={18} color='black' />
          <Text style={styles.headerText}>Profil</Text>
        </TouchableOpacity>
      </View>
      <Image style={styles.profilImage}
        source={require('../../assets/profil.png')} />
      <Text style={styles.profileText}>Rizal Nurdianto</Text>
      <Text style={styles.profileText2}>XII RPL 5</Text>
      {/* content */}
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.contentText}>NIS: </Text>
          <TextInput style={styles.contentText2} placeholder='Masukan NIS'/>
          <Text style={styles.contentText}>Username:</Text>
          <TextInput style={styles.contentText3} placeholder='Masukan Username'/>
        </View>

        <View style={styles.content2}>
          <Text style={styles.contentText}>Alamat</Text>
          <TextInput style={styles.contentText2} placeholder='Masukan Alamat'/>
        </View>
        <View style={styles.content2}>
          <Text style={styles.contentText}>Status</Text>
          <TextInput style={styles.contentText2} placeholder='Masukan Status'/>
        </View>
        <View style={styles.content2}>
          <Text style={styles.contentText}>Keterangan</Text>
          <TextInput style={styles.contentText2} placeholder='Masukan Keterangan'/>
        </View>

        <View style={styles.containerBtn}>
        
        </View>
      </View> 
      <BtnPrimary Text="Simpan" handle={handleAddScreen}/>
    </View>
    );
}