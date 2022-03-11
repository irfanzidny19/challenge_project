import {StyleSheet, Text, View, ScrollView, } from 'react-native';
import React from 'react';
import DaftarMobilPilihan from '../../components/DaftarMobilPilihan';

const DaftarMobil = () => {
  return (
    <View style={styles.page2}>
      
      <ScrollView>

      <View>

        <Text style = {{
        marginLeft: 30, 
        fontSize: 18, 
        color: 'black', 
        fontWeight: '700', 
        marginTop: 40,
        
        
        }}>Daftar Mobil</Text>

       </View>


      <View style = {{marginTop: 30}}>

      <DaftarMobilPilihan />
      <DaftarMobilPilihan />
      <DaftarMobilPilihan />
      <DaftarMobilPilihan />
      <DaftarMobilPilihan />
      <DaftarMobilPilihan />

      </View>

      </ScrollView>


    </View>
  );
};

export default DaftarMobil;

const styles = StyleSheet.create({

  page2: {
    backgroundColor: 'white',
    flex: 1,
  },

  
});
