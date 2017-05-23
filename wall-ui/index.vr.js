import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Plane,
  Text,
  View,
} from 'react-vr';

import BuzzBox from './components/BuzzBox'
import Box from './components/Box'
import { getSomeBuzz } from './api/buzz'

export default class wall_ui extends React.Component {
  constructor() {
    super()
    this.state = { buzzList: null }
  }

  componentWillMount() {
    getSomeBuzz().then(data => {
      this.setState({
        buzzList: data.map(status => ({
          createdAt: status.created_at,
          profileImageUrl: status.user.profile_image_url,
          userName: status.user.name,
          userScreenName: status.user.screen_name,
          text: status.text,
          metadata: {
            retweetCount: status.retweet_count,
            favoriteCount: status.favorite_count,
          },
        }))
      })
    })
  }

  render() {
    const text = 'adsasdads asd asdja sdfhkjsn sdfjksdjfksd js dflksdjf sjdkfjsdf sjdfksjdfklsdf sjdflksjdf'
    const { buzzList } = this.state
    return(
      <View s>
        <Pano source={asset('back.jpg')} />
        <View style={{ width: '100%', flexDirection: 'column', height: 10, flexWrap: 'wrap' }}>
          { buzzList && buzzList.map((buzz, index) => {
              return (
                <BuzzBox
                  key={buzz.id_str}
                  createdAt={buzz.createdAt}
                  text={buzz.text}
                  user={{ name: buzz.userName, screen_name: buzz.userScreenName, profileImageUrl: buzz.profileImageUrl }}
                  metadata={buzz.metadata}
                />
              )
          })}
        </View>
      </View>
    )
  }
};

AppRegistry.registerComponent('wall_ui', () => wall_ui);
