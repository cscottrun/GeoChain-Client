import React, { Component } from 'react';
import '../App.css';

export default class NewChainForm extends Component {
  constructor(props) {
    super(props);
    this.state= {
      base: 'https://connect-shared-sandbox-2445582615332.production.gw.apicast.io/v1',
      appId: 'a2165ab6',
      appKey: 'a762b8621737f5e2009eb5e9625e485b'

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.encoder = this.encoder.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  


  render() {
    return (
      <div className="App">

        <form onSubmit={this.handleSubmit}> 
          <div class="row">
           <div class="six columns">

              <label>
                External Id:
              </label>
                <input className="u-full-width" name='id1' type="text" value={this.state.id1} onChange={this.handleChange} />

              <label>
                External Id:
              </label>
                <input className="u-full-width" name='id2' type="text" value={this.state.id2} onChange={this.handleChange} />

              <label>
                External Id:
              </label>
                <input className="u-full-width" name='id3' type="text" value={this.state.id3} onChange={this.handleChange} />

              <label>
                Content:
              </label>
                <input className="u-full-width" name='content' type="text" value={this.state.content} onChange={this.handleChange} />

              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>

      </div>

     
    );
  }

  encoder (string) {
    let buff = new Buffer(string);
    return buff.toString('base64')
  }
  

  handleSubmit (e) {
    // send form data to factom
    // get reciept and put into db. 
    // for now, I only care about the chain id- don't need to save to db yet.
    e.preventDefault();
    console.log(this.state)
    let exIds = []
    exIds.push(this.encoder(this.state.id1));
    exIds.push(this.encoder(this.state.id2));
    exIds.push(this.encoder(this.state.id3));
    let content = this.encoder(this.state.content)
    fetch(`https://connect-shared-sandbox-2445582615332.production.gw.apicast.io/v1/chains`, {
      method: "POST",
      body: JSON.stringify({
        "external_ids": exIds,
        "content": content
      }),
      headers: {
        "Content-Type": "application/json",
        "app_id": this.state.appId,
        "app_key": this.state.appKey,
      },
      credentials: "same-origin"
    }).then((response) => {
      // response.status     //=> number 100–599
      // response.statusText //=> String
      // response.headers    //=> Headers
      // response.url        //=> String
    
      console.log(response.text())
    }, function(error) {
      console.log(error.message) //=> String
    })
  }
}

