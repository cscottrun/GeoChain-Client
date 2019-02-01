import React, { Component } from 'react';
import TimeStamp from 'react-timestamp'
import '../skeleton.css';
import '../index.css';

// pass factom entry data as props
// different array
export default class Compare extends Component {
  render() {
    let f = this.props.factomData;

    return (
      <div className='compareBox'>
  
        <tr>
          <td className={this.props.different.includes('barcode') ? 'different' : null}>{f.barcode_data}</td>
          <td className={this.props.different.includes('time') ? 'different' : null}><TimeStamp time={f.time_scanned_unix/ 1000} format='date' /></td>
          <td className={this.props.different.includes('lat') ? 'different' : null}>{Number.parseFloat(f.latitude).toFixed(6)}</td>
          <td className={this.props.different.includes('long') ? 'different' : null}>{Number.parseFloat(f.longitude).toFixed(6)}</td>
          <td></td>
        </tr>
        <tr>
          <td colSpan='100%'><p align='center'>
            <strong>Circled is the CORRECT information that was submitted to Factom Blockchain at time of scanning.</strong>
            </p></td>
        </tr>
    
      </div>
        
      
    )
  }
}