import React, { Component } from 'react';
import './App.css';
import NewChainForm from './components/newChainForm'
import Nav from './components/Nav'
import Query from './components/Query'


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      screen: 'Query'
    }
    this.setScreen= this.setScreen.bind(this);
    this.navigate = this.navigate.bind(this);
  }

  setScreen() {
    switch (this.state.screen) {
      case 'NewChain' : return ( < NewChainForm />);
      case 'Query' : return ( < Query />);

      default: return ( < NewChainForm />);
    }
  }
  navigate(param, e) {
    this.setState({screen: param})
  }

  render() {
    return (
      <div>
          < Nav navigate={this.navigate}/>
          <div className='container' >
            {this.setScreen()}
          </div>
      </div> 
    );
  }
}

export default App;
