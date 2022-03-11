import {StyleSheet, Text, View, ImageBackground, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import {ImageHeader} from '../../assets';
import {Dimensions} from 'react-native';
import {WARNA_DISABLE} from '../../utils/constant';
import {KotakBanner} from '../../components/';
import ButtonIcon from '../../components/ButtonIcon';
import DaftarMobilPilihan from '../../components/DaftarMobilPilihan';
import { Foto } from '../../assets';

const Home = () => {
  return (
    <View style={styles.page}>
    <StatusBar barStyle='dark-content' backgroundColor="#FFFFFF"/>
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={ImageHeader} style={styles.header}>
        <View>
        
          <Text style={styles.username}>Hi, Irfan Zidny</Text>
          <ImageBackground source={Foto} style={styles.foto}></ImageBackground>
          <Text style={styles.location}>Tangerang, Indonesia</Text>


        </View>

      
        
      </ImageBackground>

      <KotakBanner />


      <View style={styles.layanan}>
        <View style={styles.iconLayanan}>
          <ButtonIcon title="Sewa Mobil" type="Layanan" />
          <ButtonIcon title="Oleh-Oleh" type="Layanan" />
          <ButtonIcon title="Penginapan" type="Layanan" />
          <ButtonIcon title="Wisata" type="Layanan" />
        </View>
      
      <View style={styles.mobilpilihan}>

        <Text style = {{
        marginLeft: 30, 
        fontSize: 18, 
        color: 'black', 
        fontWeight: 'bold', 
        marginTop: 30,
        
        }}>Daftar Mobil Pilihan</Text>

       </View>


      </View>
      <DaftarMobilPilihan />
      <DaftarMobilPilihan />
      </ScrollView>
    </View>
  );
};

export default Home;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    width: windowWidth,
    height: windowHeight * 0.25,
  },

  foto: {

    height: 28,
    width: 28,
    flexDirection: 'row',
    marginLeft: 350,
    
    
    
  },


  username: {
    marginLeft: 13,
    marginTop: windowHeight * 0.03,
    fontSize: 16,
    color: WARNA_DISABLE,
  },
  location: {
    marginLeft: 13,
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: WARNA_DISABLE,
  },

  mobilpilihan: {
    marginTop: 15
  },
  
  layanan: {
    paddingHorizontal: 5,
    paddingTop: 15,
  },
  iconLayanan: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    color: 'black',
  },
});
