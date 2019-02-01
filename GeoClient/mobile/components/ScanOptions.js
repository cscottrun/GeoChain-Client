import React from 'react';
import {Text, View , TouchableOpacity} from 'react-native';
import styles from '../styleSheet'

// PROPS: data, type, lat, long reScan(), save()
export default class ScanOptions extends React.Component {

  render() {
    return (
      <View style={styles.optionsBox}>
       <View style = {[styles.scanBtns, {backgroundColor: 'white'}]}>
         <Text>Type: {this.props.scan.type}</Text>
         <Text>Data: {this.props.scan.data}</Text>
       </View>

       <TouchableOpacity style={[styles.scanBtns, styles.lightBlue]}
        onPress={this.props.reScan} >
         <Text>Scan Again</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[styles.scanBtns, styles.darkBlue]}
        onPress={this.props.save} >
         <Text>Save Scan</Text>
       </TouchableOpacity>

     </View>
    )
  }
}
