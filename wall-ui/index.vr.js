import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import BuzzBox from './components/BuzzBox'
import { getSomeBuzz } from './api/buzz'

export default class wall_ui extends React.Component {
  constructor() {
    super()
    this.state = { buzzList: null, rotations: [0, -45, -90, -135, -180, -225, -270, -315, -360] }
  }

  componentWillMount() {
    getSomeBuzz().then(data => {
      const { statuses } = data
      this.setState({
        buzzList: statuses.map(status => ({
          profileImageUrl: status.user.profile_image_url,
          userName: status.user.name,
          userScreenName: status.user.screen_name,
          text: status.text,
        }))
      })
    })
  }

  render() {
    const { buzzList } = this.state
    let buzzBoxRotation = 0
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
          <View style={{ flexDirection: 'row' }}>
            { buzzList && buzzList.map(buzz => {
                const buzzBox = (
                  <BuzzBox
                    key={buzz.id_str}
                    text={buzz.text}
                    user={{ name: buzz.userName, screen_name: buzz.userScreenName, profileImageUrl: buzz.profileImageUrl }}
                    rotateY={buzzBoxRotation}
                  />
                )
                buzzBoxRotation -= 45
                return buzzBox
            })}
          </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('wall_ui', () => wall_ui);
