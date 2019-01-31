import React, { Component, Fragment } from 'react';
import '../skeleton.css';
import '../index.css';
import Circle from 'react-ionicons/lib/IosHelpCircleOutline'
import Check from 'react-ionicons/lib/IosCheckmarkCircleOutline'
import TimeStamp from 'react-timestamp'
import X from 'react-ionicons/lib/IosCloseCircleOutline'
import Compare from './Compare'

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state ={
      checked: null,
      factomData: null,
    }
    this.factomVerify = this.factomVerify.bind(this);
    this.compare = this.compare.bind(this);
  }

  factomVerify () {
    let entryHash = this.props.entry.factom_entry_hash;
    fetch(`https://geochain-server.herokuapp.com/entry/${entryHash}`)
    .then((res) => res.json())
    .then((res) => this.compare(this.props.entry, res))
    .catch((error) =>{
      console.error(error);
    });
  }

  showStatusOfCheck (status) {
    let symbol = {
      null: (<Circle fontSize="35px" className='icons' onClick={this.factomVerify}/>) , 
      true: (<Check fontSize="35px" className='icons' onClick={this.factomVerify} color="green"/>) , 
      false: (<X fontSize="35px" className='icons' onClick={this.factomVerify} color="red" />)
    }
    return symbol[status];
  }

  compare(entry, factom) {
    this.setState({factomData: factom})
    if (factom.barcode_data == entry.barcode_data &&
        factom.time_scanned_unix == entry.time_scanned_unix &&
        Number.parseFloat(factom.latitude).toFixed(5) === Number.parseFloat(entry.latitude).toFixed(5) &&
        Number.parseFloat(factom.longitude).toFixed(5) === Number.parseFloat(entry.longitude).toFixed(5) ) {
      this.setState({checked: true})
    } else {
      this.setState({checked: false})
    }
  }

  render() {
    let entry = this.props.entry;
    return (
      <Fragment>
      <tr>
        <td>{entry.barcode_data}</td>
        <td><TimeStamp time={entry.time_scanned_unix / 1000} format='date'/></td>
        <td>{entry.latitude}</td>
        <td>{entry.longitude}</td>
        <td>{this.showStatusOfCheck(this.state.checked)} 
        </td>
      </tr>
      {this.state.checked === false && 
        <tr>
          <td colspan="100%">
            < Compare
              factomData = {this.state.factomData} />
          </td>
        </tr>}
      </Fragment>
    )
  }
}