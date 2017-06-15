import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { StyleProvider, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Entypo from 'react-native-vector-icons/Entypo';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Nav extends Component {
  _signIn() {
    GoogleSignin.signIn()
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  render() {
    return (
      <View style={styles.container}>
          <Button dark iconleft onPress={Actions.logo}>
            <Entypo name='fingerprint' size={20} color='white' />
            <Text> SET</Text>
          </Button>
          <GoogleSigninButton
            style={{width: 48, height: 48}}
            size={GoogleSigninButton.Size.Icon}
            color={GoogleSigninButton.Color.Dark}
            onPress={() => { this._signIn(); }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 100,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
