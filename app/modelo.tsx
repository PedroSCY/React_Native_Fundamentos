import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Modelo() {
  return (
    <View style={styles.container} >
        <Text style={styles.text}>Componente Modelo</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
})
