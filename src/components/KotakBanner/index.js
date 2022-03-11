import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Banner} from '../../assets';
import ButtonIcon from '../ButtonIcon';

const Saldo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.informasiSaldo}>
        <ImageBackground source={Banner} style={styles.banner}>
          <View style={styles.text}>
            <Text style={styles.kalimatAtas}>Sewa Mobil Berkualitas</Text>
          </View>
          <View style={styles.text}>
            <Text style={styles.kalimatBawah}>di kawasanmu</Text>
          </View>
          <View style={styles.buttonAksi}>
            <ButtonIcon title=" " />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default Saldo;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginHorizontal: 20,
    borderRadius: 12,
    marginTop: -windowHeight * 0.09,
  },
  text: {
    flexDirection: 'row',
  },
  informasiSaldo: {
    width: '60%',
  },
  kalimatAtas: {
    paddingTop: 17,
    paddingLeft: 17,
    fontSize: 18,
    color: 'white',
  },
  kalimatBawah: {
    paddingLeft: 17,
    fontSize: 18,
    color: 'white',
  },
  banner: {
    width: 353,
    height: 130,
    borderRadius: 12,
  },
  buttonAksi: {
    paddingTop: 17,
    paddingLeft: 17,
  },
});
