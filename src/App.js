import React, { Component } from 'react';
import './App.css';
import SearchPage from './containers/SearchPage';
// import { Route, withRouter } from 'react-router-dom';
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
