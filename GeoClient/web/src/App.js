import React, { Component } from 'react';
import './App.css';
import NewChainForm from './components/newChainForm'
import Nav from './components/Nav'
import Query from './components/Query'

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      screen: 'NewChain'
    }
    this.setScreen= this.setScreen.bind(this)
  }

  setScreen() {
    switch (this.state.screen) {
      case 'NewChain' : return ( < NewChainForm />);
      case 'Query' : return ( < Query />);

      default: return ( < NewChainForm />);
    }
  }

  render() {
    return (
      <div>
          < Nav />
          {this.setScreen()}
      </div> 
    );
  }
}

export default App;
