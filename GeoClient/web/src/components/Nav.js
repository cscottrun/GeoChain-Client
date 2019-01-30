import React, { Component } from 'react';
import '../index.css';

//PROPS: navigate()
export default class Nav extends Component {
  render() {
    return (
      <div>
        <ul className='navList'>
          <li className='navOpt' onClick={this.props.navigate.bind(this, 'NewChain')}>New Chain</li>
          <li className='navOpt' onClick={this.props.navigate.bind(this, 'Query')}>Explore Entries</li>
        </ul>
      </div>
      
    )
  }
}

