import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, asset } from 'react-vr'

// components
import BuzzHeader from './BuzzHeader'
import BuzzMetadata from './BuzzMetadata'
import BuzzContent from './BuzzContent'

// styles
import * as styles from './styles'

class BuzzBox extends React.Component {

  render() {
    const { text, user, metadata, createdAt } = this.props
    return (
      <View style={styles.buzzBoxContainer}>
        <BuzzHeader user={user} createdAt={createdAt} />
        <BuzzContent text={text} />
        <BuzzMetadata metadata={metadata} />
      </View>
    )
  }
}

BuzzBox.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  metadata: PropTypes.object,
  createdAt: PropTypes.string,
}

export default BuzzBox
