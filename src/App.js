import React, { Component } from 'react';
import './App.css';
import SearchPage from './containers/SearchPage';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import SelectedItems from './containers/SelectedItems'
import QrcodePage from './components/QRcodePage'


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='heading'>
          <h1 className='title' onClick={() => this.props.history.push('/')}>OutSourced</h1>
        </div>
        <Route exact path = '/' component={SearchPage} />
        <Route exact path = '/selectedResources' render={() => 
          <SelectedItems additionalResources={this.props.additionalResources}/>} />
        <Route exact path = '/QrcodePage' component={QrcodePage} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  additionalResources: state.additionalResources
})


export default withRouter(connect(mapStateToProps)(App));
