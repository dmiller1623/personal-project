import React, { Component } from 'react';
import './App.css';
import apiKey from './apiKey.js';
import SearchPage from './containers/SearchPage';
import { Route, withRouter } from 'react-router-dom';
import { getRelatedData } from './utilities/apiCalls/apiCalls';

class App extends Component {

  // getRelated = async (search) => {
    
  // }

  render() {
    return (
      <div className="App">
        {/* <Route exact path = '/searchpage' component={SearchPage} /> */}
        <SearchPage getRelated={this.getRelated}/>
      </div>
    );
  }
}

export default App;
