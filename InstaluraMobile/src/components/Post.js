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
      } from 'react-native';

const width = Dimensions.get('screen').width;
export default class Post extends Component {
  render() {
      return (
        <View>
            <View style={styles.header}>
                <Image source={require('../../resources/img/rosa.jpg')} style={styles.imgPerfil}/>
                <Text>{this.props.foto.usuario}</Text>
            </View>
            <Image source={require('../../resources/img/rosa.jpg')} style={styles.imgPost}/>
        </View> 
      )
             
    }
}

const styles = StyleSheet.create({
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