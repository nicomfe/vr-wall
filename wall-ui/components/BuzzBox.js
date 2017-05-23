import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, asset } from 'react-vr'

class BuzzBox extends React.Component {
  render() {
    const { text, user, metadata } = this.props
    return (
      <View style={[style, { transform: [{ translate: [-6, 3, -6] }] }]}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <Image source={{ uri: user.profileImageUrl }} style={{ width: 0.2, height: 0.2, marginRight: 0.1 }} />
          <Text style={textStyle}>{`${user.name} @${user.screen_name}`}</Text>
        </View>
        <View><Text style={textStyle}>{text}</Text></View>
        <View style={metadataBoxStyle}>
          <View style={metadataStyle}>
            <Image source={asset('retweet.png')} style={iconStyle} />
            {metadata.retweet_count > 0 ? <Text style={metadataTextStyle}>{metadata.retweet_count}</Text> : null}
          </View>
          <View style={metadataStyle}>
            <Image source={asset('heart.png')} style={iconStyle} />
            {metadata.favorite_count > 0 ? <Text style={metadataTextStyle}>{metadata.favorite_count}</Text> : null}
          </View>
        </View>
      </View>
    )
  }
}

const style = {
  backgroundColor: 'white',
  justifyContent: 'space-between',
  opacity: 1,
  width: '100%',
  maxWidth: 3,
  height: 1.4,
  maxHeight: 1.4,
  flexGrow: 1,
  padding: 0.1,
  margin: 0.03,
}
const textStyle = {
  fontSize: 0.14,
  color: '#14171a',
}

const iconStyle = {
  width: 0.2,
  height: 0.2,
  marginRight: 0.06,
  opacity: 0.7,
}

const metadataBoxStyle = {
  flexDirection: 'row',
  justifyContent: 'space-around',
}
const metadataStyle = {
  flexDirection: 'row',
}

const metadataTextStyle = {
  fontSize: 0.14,
  fontWeight: 'bold',
  color: '#AAB8C2',
}

BuzzBox.defaultProps = {
  metadata: {
    favorite_count: 0,
    retweet_count: 0,
  },
}

BuzzBox.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  metadata: PropTypes.object,
}

export default BuzzBox
