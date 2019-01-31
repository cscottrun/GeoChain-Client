import React from 'react';
import {Text, View , TouchableOpacity, ImageBackground} from 'react-native';
import styles from '../styleSheet'

let img1 = 'https://defensesystems.com/~/media/GIG/EDIT_SHARED/Acquisition_Contracting/supplychain.jpg'
let img2 = 'https://www.trulioo.com/wp-content/uploads/49-RegTech-Supply-Chain.jpg'

export default class ScanOptions extends React.Component {
  
  render() {
    let background = {uri: img2}
    return (
    <ImageBackground 
        source={background} 
        style={{flex: 1,
          width: null,
          height: null,
          resizeMode: 'cover'}}>
    
        <View style={[styles.container, styles.opaqueCover]}>
          <Text style={styles.header}>GeoChain</Text>
          <Text style={styles.p}>scanner</Text>

          <TouchableOpacity 
            style={styles.buttonMain}
            onPress={this.props.goScan}
            >
            <Text style={styles.buttonText}>scan barcode</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>
    )
  }
}