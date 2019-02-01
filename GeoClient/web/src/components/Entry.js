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
      different: [],
      showDiff: true,
    }
    this.factomVerify = this.factomVerify.bind(this);
    this.compare = this.compare.bind(this);
    this.toggleShowDiff = this.toggleShowDiff.bind(this)

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

  toggleShowDiff () {
    this.setState(prevState => ({
      showDiff: !prevState.showDiff
    }));
  }

  showStatusOfCheck (status) {
    let symbol = {
      null: (<Circle fontSize="35px" className='icons' onClick={this.factomVerify}/>) , 
      true: (<Check fontSize="35px" className='icons' color="green"/>) , 
      false: (<X fontSize="35px" className='icons' onClick={this.toggleShowDiff} color="red" />)
    }
    return symbol[status];
  }

 
  compare (entry, factom) {
    this.setState({factomData: factom})
    this.setState({checked: true})
    if (factom.barcode_data != entry.barcode_data) {
      this.setState({ different: [...this.state.different, 'barcode'] })
      this.setState({checked: false})
      console.log('no match!')
    }
    if (factom.time_scanned_unix != entry.time_scanned_unix) {
      this.setState({ different: [...this.state.different, 'time'] })
      this.setState({checked: false})
    }
    if (Number.parseFloat(factom.latitude).toFixed(4) !== Number.parseFloat(entry.latitude).toFixed(4)) {
      this.setState({ different: [...this.state.different, 'lat'] })
      this.setState({checked: false})
    }
    if (Number.parseFloat(factom.longitude).toFixed(4) !== Number.parseFloat(entry.longitude).toFixed(4)) {
      this.setState({ different: [...this.state.different, 'long'] })
      this.setState({checked: false})
    }
  }

  render() {
    let entry = this.props.entry;
    return (
      <Fragment>
      <tr className={this.state.checked === false ? 'red' : null}>
        <td>{entry.barcode_data}</td>
        <td><TimeStamp time={entry.time_scanned_unix / 1000} format='full'/></td>
        <td>{entry.latitude}</td>
        <td>{entry.longitude}</td>
        <td>{this.showStatusOfCheck(this.state.checked)} 
        </td>
      </tr>
      {this.state.checked === false && this.state.showDiff &&
        <tr>
          <td colSpan="100%">
            < Compare
              factomData = {this.state.factomData}
              different = {this.state.different} />
          </td>
        </tr>}
      </Fragment>
    )
  }
}