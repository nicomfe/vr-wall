import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, Image, asset } from 'react-vr'

// styles
import * as styles from './styles'

const BuzzMetadata = ({ metadata }) => {
  return (
    <View style={styles.metadataBoxStyle}>
      <View style={styles.flexRow}>
        <Image source={asset('retweet.png')} style={styles.metadataIconStyle} />
        {metadata.retweetCount > 0 ? <Text style={styles.metadataTextStyle}>{metadata.retweetCount}</Text> : null}
      </View>
      <View style={styles.flexRow}>
        <Image source={asset('heart.png')} style={styles.metadataIconStyle} />
        {metadata.favoriteCount > 0 ? <Text style={styles.metadataTextStyle}>{metadata.favoriteCount}</Text> : null}
      </View>
    </View>
  )
}

BuzzMetadata.propTypes = {
  metadata: PropTypes.object,
}

export default BuzzMetadata
