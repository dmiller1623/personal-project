import React, { Component } from 'react';
import './App.css';
import SearchPage from './containers/SearchPage';
import { Route, withRouter } from 'react-router-dom';
import SelectedItemsContainer from './components/SelectedItemsContainer'
class App extends Component {

  // getRelated = async (search) => {
    
  // }

  render() {
    return (
      <div className="App">
        <Route exact path = '/' component={SearchPage} />
        <Route exact path = '/selectedResources' component={SelectedItemsContainer} />
        {/* <SearchPage /> */}
      </div>
    );
  }
}

export default withRouter(App);
