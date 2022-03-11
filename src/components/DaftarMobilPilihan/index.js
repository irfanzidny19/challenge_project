import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Dimensions, Image} from 'react-native'
import React from 'react'
import { Xenia } from '../../assets'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DaftarMobilPilihan = () => {
  return (
    
    <TouchableOpacity style={styles.container} >
  
    <ImageBackground source={Xenia} style={styles.xenia}></ImageBackground>
   
      <View>
      <Text style = {{textAlign: 'left', fontWeight: '400', color: 'black', fontSize: 15, paddingLeft: 8, }}> Daihatsu Xenia</Text>
      
      <View style={styles.icon}>
      
      <View style={styles.icon1}>
      <FontAwesome5 name="user" backgroundColor="#3b5998">
      
      <Text>4</Text>
      
      </FontAwesome5> 
      </View>
      
      
      <View style={styles.icon2}>
      <FontAwesome5 name="gift" backgroundColor="#3b5998" >
      
      <Text>2</Text>
      
      </FontAwesome5> 
      </View>

       

       </View>


       <View style={styles.harga}>
       <Text style = {{textAlign: 'left', fontWeight: '400', color: 'black', fontSize: 15, color: 'green', paddingLeft: 8}}> Rp. 230.000</Text>
      </View>
      

      </View>

      
    
    </TouchableOpacity>

  )
}

export default DaftarMobilPilihan

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({

 container: {
    padding: 22,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: 350,
    height: 98,
    marginLeft: 20,
    elevation: 9,
    
    marginVertical: windowHeight*0.02,
    alignItems: 'center'
    
 },

  icon : {
    flexDirection: 'row',
    marginTop: 5
  },
 
 icon1 : {
    marginLeft: 12,
    

  },

  icon2 : {
    marginLeft: 12,
    

  },

  harga: {
    marginTop: 7,
    

  },
 
  xenia: {
    height: 50,
    width: 50,
    
  },


})