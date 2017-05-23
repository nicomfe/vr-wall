import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Plane,
  CylindricalPanel,
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

  // componentWillMount() {
  //   getSomeBuzz().then(data => {
  //     const { statuses } = data
  //     this.setState({
  //       buzzList: statuses.map(status => ({
  //         profileImageUrl: status.user.profile_image_url,
  //         userName: status.user.name,
  //         userScreenName: status.user.screen_name,
  //         text: status.text,
  //       }))
  //     })
  //   })
  // }
  //
  // // render() {
  // //   const { buzzList, positions } = this.state
  // //   let buzzBoxRotation = 0
  // //   return (
  // //     <View>
  // //       <Pano source={asset('chess-world.jpg')} />
  // //         <View style={{ flexDirection: 'row' }}>
  // //           { buzzList && buzzList.map((buzz, index) => {
  // //               const buzzBox = (
  // //                 <BuzzBox
  // //                   key={buzz.id_str}
  // //                   text={buzz.text}
  // //                   position={positions[index]}
  // //                   user={{ name: buzz.userName, screen_name: buzz.userScreenName, profileImageUrl: buzz.profileImageUrl }}
  // //                   rotateY={buzzBoxRotation}
  // //                 />
  // //               )
  // //               buzzBoxRotation -= 45
  // //               return buzzBox
  // //           })}
  // //         </View>
  // //     </View>
  // //   );
  // // }
  // // getBuzzColumn = (buzzList) => {
  // //
  // // }
  // //
  // getBuzzColumns = () => {
  //   const { buzzList } = this.state
  //   let buzzColumns = []
  //   let _buzzList = buzzList
  //   while(_buzzList.length > 0) {
  //     if (_buzzList.length > 6) {
  //       console.log('1')
  //       buzzColumns.push({
  //         columns: _buzzList[0,6],
  //       })
  //       _buzzList = _buzzList.slice(0,7)
  //     } else {
  //       console.log('2')
  //       buzzColumns.push({
  //         columns: _buzzList,
  //       })
  //       _buzzList = []
  //     }
  //   }
  //   console.log(buzzColumns)
  //   const text = 'adsasdads asd asdja sdfhkjsn sdfjksdjfksd js dflksdjf sjdkfjsdf sjdfksjdfklsdf sjdflksjdf'
  //   return (
  //     <View style={{ flexDirection: 'row' }}>
  //       { buzzColumns.map((buzzColumnsItem, index) => {
  //         return (
  //           <View key={`${buzzColumn}${index}`}>
  //             <Box text={text} />
  //           </View>
  //         )
  //       })}
  //     </View>
  //   )
  // }

  render() {
    const text = 'adsasdads asd asdja sdfhkjsn sdfjksdjfksd js dflksdjf sjdkfjsdf sjdfksjdfklsdf sjdflksjdf'
    return(
      <View style={{ flexDirection: 'row' }}>
        <Pano source={asset('chess-world.jpg')} />
        <View>
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
        </View>
        <View>
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
        </View>
        <View>
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
        </View>
        <View>
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
          <Box text={text} />
        </View>
      </View>
    )
  }
};

AppRegistry.registerComponent('wall_ui', () => wall_ui);
