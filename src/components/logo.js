import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  Image,
  View
} from 'react-native';
import TouchableWithoutFeedback from 'TouchableWithoutFeedback';
import { Actions } from 'react-native-router-flux';

export default class Logo extends Component {
  render() {
    return (
      <TouchableWithoutFeedback  onPress={Actions.lobby}>
        <View style={styles.container}>
          <Image source={require('isg/res/img/b.1.jpg')} style={styles.logo} />
          <Text style={styles.touch}>Please touch.</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
  },
  touch: {
    top: 20,
    fontSize: 11,
    fontWeight: 'bold',
    color: '#524c00'
  }
});
