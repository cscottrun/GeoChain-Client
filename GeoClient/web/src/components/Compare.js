import React, { Component } from 'react';
import '../skeleton.css';
import '../index.css';

export default class Compare extends Component {
  render() {
    return (
      <div className='compareBox'>
      <table class="u-full-width">

        <thead>
          <tr>
            <th></th>
            <th>Barcode</th>
            <th>Time</th>
            <th>Latitude</th>
            <th>Longitude</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>26</td>
            <td>26</td>
            <td>26</td>
            <td>26</td>

          </tr>
          
        </tbody>

      </table>
      </div>
        
      
    )
  }
}