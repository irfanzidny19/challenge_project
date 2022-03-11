import { StyleSheet, Text, View,  ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Akun } from '../../assets'

const AkunPage = () => {
  return (
    <View style={styles.page}>    
       <View>

        <Text style = {{
        marginLeft: 30, 
        fontSize: 18, 
        color: 'black', 
        fontWeight: '700', 
        marginTop: 30,
        
        }}>Akun</Text>

       </View>
       
       
       <ImageBackground>
        <Image source={Akun} style={styles.akun} />

       </ImageBackground>
       
       
       <Text style={styles.font}>Upsss kamu belum memiliki akun. Mulai buat akun agar transaksi di BCR lebih mudah</Text>
        
        <TouchableOpacity>
        
        <View style = {styles.register}>
        
        <Text style = {styles.fontRegister}>Daftar</Text>
        
      </View>

      </TouchableOpacity>

      

      

    </View>
  )
}

export default AkunPage

const styles = StyleSheet.create({

  page: {
    flex: 1,
    backgroundColor: 'white',
    
    
    
  },

  akun: {
    width: 312,
    height: 192,
    marginTop: 150,
    marginLeft: 40
  },

  font : {

    fontSize: 16,
    marginTop: 20,
    
    color: 'black',
    textAlign: 'center',
    
    
  },

  register: {
    
    marginTop: 40,
    height: 40,
    width: 86,
    backgroundColor: 'limegreen',
    
    left: 145,
    },

    fontRegister: {

      width: 57,
      height: 20,
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 16,
      flexDirection: 'row',
      left: 12,
      top: 8,
      
      fontWeight: 'bold'

    }



})
