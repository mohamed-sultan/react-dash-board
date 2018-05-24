import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ApolloProvider } from 'react-apollo'
import Storage from 'local-storage'

import {Client } from './client'
import GET_ALL_USER_QUERY from './graphql/getAllUser'
import Home from './component/main'
import Input from './component/input'

class App extends Component {
  state = {
    r :null
  }
  async componentWillMount(){
    const x = Storage.get('register')
    if(x==="admin"){
      this.setState({r:true})
    }
     const result = await Client.query({
      query: GET_ALL_USER_QUERY,
    });

  }
  _handleIncome = (r) => {
    this.setState({r});
  }
  render() {
    if(!this.state.r){
      return <Input getResult={this._handleIncome} />
    }
    return (
      <ApolloProvider client={Client} >
      <div className="App">
     <Home />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
