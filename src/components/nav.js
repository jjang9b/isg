import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import { StyleProvider, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Entypo from 'react-native-vector-icons/Entypo';

export default class Nav extends Component {
  render() {
    return (
      const styles = this.props.style;

      <View style={styles.container}>
        <StyleProvider style={nativeTheme}>
          <Button dark iconleft onPress={Actions.logo} btnMargin>
            <Entypo name='fingerprint' size={20} color='white' />
            <Text> SET</Text>
          </Button>
          <Button dark iconleft onPress={Actions.logo} btnMargin>
            <Entypo name='fingerprint' size={20} color='white' />
            <Text> SET</Text>
          </Button>
          <Button dark iconleft onPress={Actions.logo} btnMargin>
            <Entypo name='fingerprint' size={20} color='white' />
            <Text> SET</Text>
          </Button>
        </StyleProvider>
      </View>
    );
  }
}

const nativeTheme = {
    'NativeBase.Button': {
      .btnMargin: {
        height: 70,
        borderRadius: 35,
      }
    }
};

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
