/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View,
        Image,
        Dimensions,
        ScrollView,
        FlatList
      } from 'react-native';

const width = Dimensions.get('screen').width;
type Props = {};
export default class App extends Component<Props> {
  render() {

    const fotos = [
      {id:1, usuario: 'Vinícius'},
      {id:2, usuario: 'Thainan'},
      {id:3, usuario: 'Cintia'}
    ]
    
    return (
      <FlatList style={{marginTop: 20}}
        keyExtractor={item => item.id}
        data={fotos}
        renderItem= { ({item}) =>
          <View key={item.id}>
            <Text>{item.usuario}</Text>
            <Image source={require('./resources/img/rosa.jpg')} style={{width: width, height: width}}/>
          </View>
        }
      />

      // <ScrollView style={{marginTop: 20}}>
      //   {fotos.map(foto =>
      //     <View key={foto.id}>
      //       <Text>{foto.usuario}</Text>
      //       <Image source={require('./resources/img/rosa.jpg')} style={{width: width, height: width}}/>
      //     </View>
      //   )}
      // </ScrollView>
    );
  }
}
