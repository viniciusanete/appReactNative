/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { 
        StyleSheet, 
        Text, 
        View,
        Image,
        Dimensions,
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
      <FlatList style={styles.container}
        keyExtractor={item => item.id}
        data={fotos}
        renderItem= { ({item}) =>
          <View key={item.id}>
            <View style={styles.header}>
              <Image source={require('./resources/img/rosa.jpg')} style={styles.imgPerfil}/>
              <Text>{item.usuario}</Text>
            </View>
            <Image source={require('./resources/img/rosa.jpg')} style={styles.imgPost}/>
          </View>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  header: {
    margin: 10, 
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgPerfil: {
    marginRight: 10, 
    borderRadius: 20, 
    width: 40, 
    height: 40
  },
  imgPost: {
    width: width, 
    height: width
  }
});