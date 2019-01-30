import React, { Component } from 'react';
import '../skeleton.css';
import '../index.css';
import Circle from 'react-ionicons/lib/IosHelpCircleOutline'
import Check from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import Compare from './Compare'

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state ={
      checked: null,
    }
    this.factomVerify = this.factomVerify.bind(this)
    this.compare = this.compare.bind(this)
  }

  factomVerify () {
    let entryHash = this.props.entry.factom_entry_hash;
    fetch(`https://geochain-server.herokuapp.com/entry/${entryHash}`)
    .then((res) => res.json())
    .then( (res) => this.compare(this.props.entry, res))
    .catch((error) =>{
      console.error(error);
    });
  }

  compare(entry, factom) {  
    if (factom.barcode_data == entry.barcode_data &&
        factom.time_scanned_unix == entry.time_scanned_unix &&
        Number.parseFloat(factom.latitude).toFixed(5) === Number.parseFloat(entry.latitude).toFixed(5) &&
        Number.parseFloat(factom.longitude).toFixed(5) === Number.parseFloat(entry.longitude).toFixed(5) ) {
      this.setState({checked: true})
    }
  }

  render() {
    let entry = this.props.entry;
    return (
      
      <tr>
        <td>{entry.barcode_data}</td>
        <td>{entry.time_scanned_unix}</td>
        <td>{entry.latitude}</td>
        <td>{entry.longitude}</td>
        <td>{ this.state.checked ? 
          <Check fontSize="35px" onClick={this.factomVerify} color="green"/> :
          <Circle fontSize="35px" onClick={this.factomVerify}/> } 
        </td>

      </tr>
      
    )
  }
}