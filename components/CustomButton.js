import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const CustomButton = ({ btnText, onpress, width}) => {
  return (
    <TouchableOpacity onPress={onpress}>
        <LinearGradient
            colors={['#40A1F9', '#4DBEEB', '#3DBFF7']}
            start={{ x: 0.3, y: 0.4 }}
            end={{ x: 1, y: 1 }}
            style={[styles.btn, styles[`${width}`]]}
        >
        <Text style={styles.btnText}>{btnText}</Text>
        </LinearGradient>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btn: {
        width: 140,
        backgroundColor: '#4DBEEB',
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        marginVertical: 16,
        borderRadius: 5,
    },
    btnfull: {
        width: '100%',
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
})