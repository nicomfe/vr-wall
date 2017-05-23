import React from 'react'
import { View, Text } from 'react-native'

const Box = (props) => {
  const { text } = props
  return (
    <View style={[style, { transform: [{ translate: [-6, 3, -6] }] }]}>
      <Text style={textStyle}>{text}</Text>
    </View>
  )
}

const style = {
  backgroundColor: 'white',
  opacity: 1,
  width: '100%',
  maxWidth: 3,
  height: 1,
  flexGrow: 1,
  padding: 0.1,
  margin: 0.03,
}
const textStyle = {
  fontSize: 0.14,
  color: '#14171a',
}

export default Box
