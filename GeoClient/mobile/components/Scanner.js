import React from 'react';
import styles from '../styleSheet'
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';
import ScanOptions from './ScanOptions'


export default class Scanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: 'granted',
      codeType: null,
      codeData: null,
    }
    this.handleScan = this.handleScan.bind(this)
    this.reScan = this.reScan.bind(this)
  }

  handleScan = ({ type, data }) => {
    this.setState({codeData: data, codeType: type})
  }
  
  reScan () {
    this.setState({codeData: null, codeType: null})
  }

  render() {

    return this.state.codeData ? (
      
        <View style={styles.container}>
          < ScanOptions 
          data={this.state.codeData} 
          type={this.state.codeType} 
          reScan={this.reScan}/>
        </View>
      ): 
    

    (  
      <View style={styles.container}>
        <BarCodeScanner
          onBarCodeScanned={this.handleScan}
          style={StyleSheet.absoluteFill}
        />          
      </View>
    );
  }

  
}