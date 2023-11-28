import { Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Home({ navigation }) {
  const handleAddScreen = () => {
    navigation.navigate('Tambah');
  }

  const handlelDetailScreen = () => {
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.flexBell}>
        <Text style={styles.txtWelcome}>Selamat Datang,</Text>
        <Feather name="bell" size={24} color="black" />
      </View>
      <Text style={styles.txtWelcome2}>Admin</Text>
      <Image style={styles.imageDashboard}
        source={require('../../assets/dashboardimage.png')} />
      <Text style={styles.seeDetails}>See details</Text>
      <Text style={styles.list}>List Student</Text>

      <ScrollView style={{ height: 400 }}>
        <View style={styles.studentGroupContainer}>
          <View style={styles.studentGroup}>
            <View style={styles.liststudent}>
              <Image style={styles.imageList}
                source={require('../../assets/imagelist.png')} />
              <View style={styles.studentContainer}>
                <Text style={styles.name}>Rizal Nurdianto</Text>
                <Text style={styles.nis}>541211155 | XII RPL 5 </Text>
              </View>
              
              <TouchableOpacity style={styles.iconGroup} onPress={handlelDetailScreen}>
                <Feather style={styles.iconright} name="chevron-right" size={32} color='white' />
              </TouchableOpacity>
            </View>
            <View style={styles.statusGroup}>
              <View style={styles.keteranganGroup}>
                <Feather style={styles.iconFile} name="file" size={18} color='white' />
                <Text style={styles.keterangan}>Kepentingan keluarga</Text>
              </View>
              <View style={styles.keteranganGroup2}>
                <Feather style={styles.iconFile2} name="disc" size={18} />
                <Text style={styles.keterangan}>Izin</Text>
              </View>
            </View>
          </View>
          <View style={styles.studentGroup}>
            <View style={styles.liststudent}>
              <Image style={styles.imageList}
                source={require('../../assets/imagelist.png')} />
              <View style={styles.studentContainer}>
                <Text style={styles.name}>Risang Agnijati</Text>
                <Text style={styles.nis}>541211154 | XII RPL 5 </Text>
              </View>
              <TouchableOpacity style={styles.iconGroup} onPress={handlelDetailScreen}>
                <Feather style={styles.iconright} name="chevron-right" size={32} color='white' />
              </TouchableOpacity>
            </View>
            <View style={styles.statusGroup}>
              <View style={styles.keteranganGroup}>
                <Feather style={styles.iconFile} name="file" size={18} color='white' />
                <Text style={styles.keterangan}>Kepentingan keluarga</Text>
              </View>
              <View style={styles.keteranganGroup2}>
                <Feather style={styles.iconFile2} name="disc" size={18} />
                <Text style={styles.keterangan}>Hadir</Text>
              </View>
            </View>
          </View>
          <View style={styles.studentGroup}>
            <View style={styles.liststudent}>
              <Image style={styles.imageList}
                source={require('../../assets/imagelist.png')} />
              <View style={styles.studentContainer}>
                <Text style={styles.name}>Rizal Nurdianto</Text>
                <Text style={styles.nis}>541211155 | XII RPL 5 </Text>
              </View>
              <View style={styles.iconGroup}>
                <Feather style={styles.iconright} name="chevron-right" size={32} color='white' />
              </View>
            </View>
            <View style={styles.statusGroup}>
              <View style={styles.keteranganGroup}>
                <Feather style={styles.iconFile} name="file" size={18} color='white' />
                <Text style={styles.keterangan}>Kepentingan keluarga</Text>
              </View>
              <View style={styles.keteranganGroup2}>
                <Feather style={styles.iconFile2} name="disc" size={18} />
                <Text style={styles.keterangan}>Hadir</Text>
              </View>
            </View>
          </View>
          <View style={styles.studentGroup}>
            <View style={styles.liststudent}>
              <Image style={styles.imageList}
                source={require('../../assets/imagelist.png')} />
              <View style={styles.studentContainer}>
                <Text style={styles.name}>Rizal Nurdianto</Text>
                <Text style={styles.nis}>541211155 | XII RPL 5 </Text>
              </View>
              <View style={styles.iconGroup}>
                <Feather style={styles.iconright} name="chevron-right" size={32} color='white' />
              </View>
            </View>
            <View style={styles.statusGroup}>
              <View style={styles.keteranganGroup}>
                <Feather style={styles.iconFile} name="file" size={18} color='white' />
                <Text style={styles.keterangan}>Kepentingan keluarga</Text>
              </View>
              <View style={styles.keteranganGroup2}>
                <Feather style={styles.iconFile2} name="disc" size={18} />
                <Text style={styles.keterangan}>Hadir</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.btnAdd} onPress={handleAddScreen}>
        <Feather name='plus' size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}