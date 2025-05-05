import { center } from '@/styles/components'
import { textBold, textRed500, textXl } from '@/styles/utils'
import React from 'react'
import { Text, View } from 'react-native'

export default function Estilo() {
  return (
    <View style={[center]}>
        <Text style={[textXl,textBold, textRed500]}>Estilo</Text>
    </View>
  )
}
