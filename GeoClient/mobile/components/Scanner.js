import React from 'react';
import styles from '../styleSheet'
import { Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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
      time: null,
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
    heroku = 'https://geochain-server.herokuapp.com/entries';
    localhost = 'http://localhost:2000/entries';
    alert(`Your scan has been saved.`);
    let url = heroku;
    let data = this.state

    fetch(url, {
      method: 'POST', 
      body: JSON.stringify(data), 
      headers:{
        'Content-Type': 'application/json'
      }
      })
      .then(this.setState({
        errorMessage: null,
        codeType: null,
        codeData: null,
        lat: null,
        long: null,
        time: null,
      }))
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

    return this.state.codeData && this.state.lat ? (
      
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
        <TouchableOpacity 
          style={styles.buttonSmall}
          onPress={this.props.goHome}
          >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>          
      </View>
    );

  }

}