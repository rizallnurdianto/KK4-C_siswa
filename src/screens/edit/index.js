import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Detail({ navigation }) {
    const handleHomeScreen = () => {
        navigation.navigate('Home');
    }

    const handleEditScreen = () => {
        navigation.navigate('Edit');
    }


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={handleHomeScreen} style={styles.headerGroup} >
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
          <Text style={styles.contentText2}>541211155</Text>
          <Text style={styles.contentText}>Username:</Text>
          <Text style={styles.contentText3}>Rizal Nurdianto</Text>
        </View>

        <View style={styles.content2}>
          <Text style={styles.contentText}>Alamat</Text>
          <Text style={styles.contentText2}>Jl. Peleseran Kedungwringin, Tunjung RT 02/1,
            Kec. Jatilawang, Banyumas</Text>
        </View>
        <View style={styles.content2}>
          <Text style={styles.contentText}>Status</Text>
          <Text style={styles.contentText2}>Hadir</Text>
        </View>
        <View style={styles.content2}>
          <Text style={styles.contentText}>keterangan</Text>
          <Text style={styles.contentText2}>Kepentingan keluarga</Text>
        </View>

        <View style={styles.containerBtn}>
          <TouchableOpacity style={styles.kecilBtn} onPress={handleHomeScreen}>
            <Feather name='trash' size={24} color='white' />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleHomeScreen} style={styles.btnSimpan}>
            <Text style={styles.btnSimpanText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
} 