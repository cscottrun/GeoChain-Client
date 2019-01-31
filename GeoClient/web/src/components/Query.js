import React, { Component } from 'react';
import '../skeleton.css';
import '../index.css';
import Entry from './Entry'

export default class Query extends Component {
  constructor(props) {
    super(props);
    this.state={
      data: [],
    }
  }

  
  componentWillMount(){
    return fetch('https://geochain-server.herokuapp.com/entries')
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.entries,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
   
    let entries = this.state.data.map( entry => {
      return < Entry entry={entry}  key={entry.id} />
    });

    return (
      <div>
       
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Time Scanned</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Factom Verify</th>
          </tr>
        </thead>

        <tbody>
          {entries}         
        </tbody>
        
      </table>
      </div>
    )
  }
}