import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-vr'

class BuzzBox extends React.Component {
  render() {
    const { text, user } = this.props
    return (
      <View style={[style, { transform: [{ translate: [-6, 3, -6] }] }]}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={{ uri: user.profileImageUrl }} style={{ width: 0.2, height: 0.2, marginRight: 0.1 }} />
          <Text style={textStyle}>{`${user.name} @${user.screen_name}`}</Text>
        </View>
        <View><Text style={textStyle}>{text}</Text></View>
      </View>
    )
  }
}

const style = {
  backgroundColor: 'white',
  opacity: 1,
  width: '100%',
  maxWidth: 3,
  height: 1,
  maxHeight: 1,
  flexGrow: 1,
  padding: 0.1,
  margin: 0.03,
}
const textStyle = {
  fontSize: 0.14,
  color: '#14171a',
}

BuzzBox.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
}
export default BuzzBox
