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
    this.sortByCode = this.sortByCode.bind(this)
    this.sortByTime = this.sortByTime.bind(this)
    this.sortByLat = this.sortByLat.bind(this)
    this.sortByLong = this.sortByLong.bind(this)

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

  sortByCode () {
    function sortCallback (a,b) {
      if (a.barcode_data < b.barcode_data) return -1;
      if (a.barcode_data > b.barcode_data) return 1;
      return 0;
    }
    let sorted = Object.values(this.state.data).sort(sortCallback);
    this.setState({data: sorted})
  }

  sortByTime () {
    function sortCallback (a,b) {
      if (a.time_scanned_unix < b.time_scanned_unix) return -1;
      if (a.time_scanned_unix > b.time_scanned_unix) return 1;
      return 0;
    }
    let sorted = Object.values(this.state.data).sort(sortCallback);
    this.setState({data: sorted})
  }

  sortByLat () {
    function sortCallback (a,b) {
      if (a.latitude < b.latitude) return -1;
      if (a.latitude > b.latitude) return 1;
      return 0;
    }
    let sorted = Object.values(this.state.data).sort(sortCallback);
    this.setState({data: sorted})
  }

  sortByLong () {
    function sortCallback (a,b) {
      if (a.longitude < b.longitude) return -1;
      if (a.longitudea > b.longitude) return 1;
      return 0;
    }
    let sorted = Object.values(this.state.data).sort(sortCallback);
    this.setState({data: sorted})
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
            <th onClick={this.sortByCode}>Barcode</th>
            <th onClick={this.sortByTime}>Time Scanned</th>
            <th onClick={this.sortByLat}>Latitude</th>
            <th onClick={this.sortByLong}>Longitude</th>
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