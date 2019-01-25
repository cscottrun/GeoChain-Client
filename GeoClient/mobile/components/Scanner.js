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
      location: null,
    }
    this.handleScan = this.handleScan.bind(this)
    this.reScan = this.reScan.bind(this)
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

  // save() {
  //   //need to write function to save scan and pass this to the scanOptions
  // }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {

    return this.state.codeData ? (
      
      <View style={styles.container}>
        < ScanOptions 
        data={this.state.codeData} 
        type={this.state.codeType} 
        location= {this.state.location}
        reScan={this.reScan}
        />
      </View>
      ):(  
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={this.handleScan}
          style={StyleSheet.absoluteFill}
        />          
      </View>
    );

  }

}