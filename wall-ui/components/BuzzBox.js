import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-vr'

class BuzzBox extends React.Component {
  render() {
    const { text, user, rotateY } = this.props
    return (
      <View style={[style, { transform: [{ translate: [-3, 1, -5] }, { rotateY }] }]}>
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
  opacity: 0.9,
  width: '100%',
  maxWidth: 3,
  height: 1,
  backgroundColor: 'white',
  padding: 0.1,
  margin: 0.1,
}
const textStyle = {
  fontSize: 0.14,
  color: 'black',
}

BuzzBox.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  rotateY: PropTypes.number,
}
export default BuzzBox
