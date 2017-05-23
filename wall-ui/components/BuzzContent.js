import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-vr'

// styles
import * as styles from './styles'

const BuzzContent = ({ text }) => {
  return <View><Text style={styles.textStyle}>{text}</Text></View>
}

BuzzContent.propTypes = {
  text: PropTypes.string,
}

export default BuzzContent
