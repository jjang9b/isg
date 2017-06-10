import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  View
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Actions, Router, Scene } from 'react-native-router-flux';
import * as actions from '../actions';
import * as components from '../components';

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
}

class MainApp extends Component {
  render() {
    return(
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="logo" component={components.logo} title="logo" initial={true} />
          <Scene key="lobby" component={components.lobby} title="lobby" />
        </Scene>
      </Router>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
