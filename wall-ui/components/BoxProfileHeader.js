import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, asset } from 'react-vr'

// utils
import { formatDate } from './utils'
// styles
import * as styles from './styles'

const BoxProfileHeader = ({ user, createdAt }) => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <Image source={{ uri: user.profileImageUrl }} style={styles.profileImage} />
      <Text style={styles.textStyle}>{`${user.name} @${user.screen_name} - ${formatDate(new Date(createdAt))}`}</Text>
    </View>
  )
}

BoxProfileHeader.defaultProps = {
  user: {},
  createdAt: new Date().toString(),
}

BoxProfileHeader.propTypes = {
  user: PropTypes.object.isRequired,
  createdAt: PropTypes.string,
}

export default BoxProfileHeader
