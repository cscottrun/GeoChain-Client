import React from 'react';
import styles from '../styleSheet'
import { Platform, StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions, Constants, Location } from 'expo';
import ScanOptions from './ScanOptions'


export default class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: null,
      codeType: null,
      codeData: null,
      lat: null,
      long: null,
      time: null
    }
    this.handleScan = this.handleScan.bind(this)
    this.reScan = this.reScan.bind(this)
    this.save = this.save.bind(this)

  }
  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  handleScan = ({ type, data }) => {
    this.setState({codeData: data, codeType: type})
  }
  
  reScan () {
    this.setState({codeData: null, codeType: null})
  }

  save() {
    alert(`Your button did something!`);
    let url = 'https://geochain-server.herokuapp.com/post';
    let data = this.state

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
      })
      .then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ 
      lat: location.coords.latitude,
      long: location.coords.longitude,
      time: Date.now()
     });
  };

  render() {

    return this.state.codeData ? (
      
      <View style={styles.container}>

        < ScanOptions 
        scan={this.state}
        reScan={this.reScan}
        save={this.save}
        />

      </View>
      ):(  
      <View style={styles.container}>
        < BarCodeScanner
          onBarCodeScanned={this.handleScan}
          style={StyleSheet.absoluteFill}
        />          
      </View>
    );

  }

}