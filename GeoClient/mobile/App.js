import React from 'react';
import { StyleSheet, Text, View, Fragment } from 'react-native';
import Scanner from './components/Scanner'
import Home from './components/Home'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'Home'
    }
  }

  setScreen (input) {
    let screen = {
      'Home': (< Home goScan={() => this.setState({screen: 'Scan'})} />),
      'Scan': (< Scanner goHome={() => this.setState({screen: 'Home'})} />)
    }
    return screen[input];
  }
  render() {
    screen = this.state.screen
    return (
      <View style={{flex: 1}}>
        {this.setScreen(this.state.screen)}
      </View>
    );
  }
}
