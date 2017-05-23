import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image } from 'react-vr'

// utils
import { formatDate } from './utils'
// styles
import * as styles from './styles'

const BuzzHeader = ({ user, createdAt }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Image source={{ uri: user.profileImageUrl }} style={styles.profileImage} />
      <Text style={styles.textStyle}>{`${user.name} @${user.screen_name} - ${formatDate(new Date(createdAt))}`}</Text>
    </View>
  )
}

BuzzHeader.defaultProps = {
  user: {},
  createdAt: new Date().toString(),
}

BuzzHeader.propTypes = {
  user: PropTypes.object.isRequired,
  createdAt: PropTypes.string,
}

export default BuzzHeader
