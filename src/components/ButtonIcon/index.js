import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button, IconCamera, IconBox, IconTruck, IconKey} from '../../assets';

const ButtonIcon = ({title, type}) => {
  const Icon = () => {
    if (title === '') return <Button />;

    if (title === 'Sewa Mobil') return <IconTruck />;

    if (title === 'Oleh-Oleh') return <IconBox />;

    if (title === 'Penginapan') return <IconKey />;

    if (title === 'Wisata') return <IconCamera />;

    return <Button />;
  };
  return (
    <TouchableOpacity>
      <View style={styles.button(type)}>
        <Icon />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({
  button: type => ({
    backgroundColor: type === 'Layanan' ? '#DEF1DF' : null,
    borderRadius: 5,
    justifyContent: type === 'Layanan' ? 'center' : null,
    marginTop: type === 'Layanan' ? 12 : null,
  }),
  text: {
    fontSize: 12,
    textAlign: 'center',
    color: 'black',
  },
});
