import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconAkun, IconHome, IconList, IconAkunActive, IconHomeActive, IconListActive } from '../../assets'
import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant'

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if(label === "Home") return isFocused ? <IconHomeActive/> :<IconHome/>

    if(label === "Daftar Mobil") return isFocused ? <IconListActive/> : <IconList/> 

    if(label ===  "Akun") return isFocused ? <IconAkunActive/> : <IconAkun/>
  
    return <IconHome/>
  }
  return (
   <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.container}>
            <Icon />
            <Text style={styles.text(isFocused)}>{label}</Text>
          </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: (isFocused) => ({
    fontSize: 13,
    marginTop: 8,
    color: isFocused ? WARNA_UTAMA : WARNA_DISABLE,
  })
})