import React, { Component } from 'react';
import TimeStamp from 'react-timestamp'
import '../skeleton.css';
import '../index.css';

// pass factom entry data as props
export default class Compare extends Component {
  render() {
    let f = this.props.factomData;

    return (
      <div className='compareBox'>
      <table className="u-full-width">
        <tbody>
        <tr>
          <td>{f.barcode_data}</td>
          <td><TimeStamp time={f.time_scanned_unix/ 1000} format='date' /></td>
          <td>{f.latitude}</td>
          <td>{f.longitude}</td>
        </tr>
        <tr>
          <td colSpan='100%'><p align='center'>
            <strong>This data was submitted to Factom Blockchain at time scanned.</strong>
            </p></td>
        </tr>
        </tbody>
        
      </table>
      </div>
        
      
    )
  }
}