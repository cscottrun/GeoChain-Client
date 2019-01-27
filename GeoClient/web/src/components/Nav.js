import React, { Component } from 'react';
import '../index.css';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className='navList'>
          <li className='navOpt' onClick={this.props.nav}>New Chain</li>
          <li className='navOpt' onClick={this.props.nav}>Explore Entries</li>
        </ul>
      </div>
      
    )
  }
}

