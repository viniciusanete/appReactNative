/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Post from './src/components/Post';
import { 
        StyleSheet, 
        Text, 
        View,
        Image,
        Dimensions,
        FlatList
      } from 'react-native';

const width = Dimensions.get('screen').width;
export default class App extends Component {

  constructor(){
    super();
    this.state = {
      fotos: []
    }
  }

  componentDidMount(){
    //fetch()
  }

  render() {
    return (
      <FlatList style={styles.container}
        keyExtractor={iten => iten.id}
        data={this.state.fotos}
        renderItem= { ({item}) =>
          <Post foto={item}/>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
});