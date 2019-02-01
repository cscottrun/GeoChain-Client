import React, { Component } from 'react';
import '../skeleton.css';
import '../index.css';
// import Pin from 'react-ionicons/lib/IosPin'
import Chain from 'react-ionicons/lib/IosLink'


//PROPS: navigate()
export default class Nav extends Component {
  render() {
    return (
      <div className='navBar'>
        <img src={require('../logo.png')} className='logo'/>
        <ul className='navList'>
          <li className='navOpt' onClick={this.props.navigate.bind(this, 'NewChain')}>New Chain</li>
          <li className='navOpt' onClick={this.props.navigate.bind(this, 'Query')}>Explore Entries</li>
        </ul>
      </div>
      
    )
  }
}

