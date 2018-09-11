import React, { Component } from 'react';
import './App.css';
import SearchPage from './containers/SearchPage';
import { connect } from 'react-redux'
import { Route, withRouter } from 'react-router-dom';
import SelectedItemsContainer from './components/SelectedItemsContainer'
var QRCode = require('qrcode')
 
// QRCode.toDataURL('http://localhost:3000/selectedResources', function (err, url) {
//   console.log(url)
// })

// QRCode.toString('http://www.google.com', function (err, string) {
//   if (err) throw err
//   console.log(string)
// })


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='heading'>
          <h1 className='title' onClick={() => this.props.history.push('/')}>OutSourced</h1>
        </div>
        <Route exact path = '/' component={SearchPage} />
        <Route exact path = '/selectedResources' render={() => 
          <SelectedItemsContainer additionalResources={this.props.additionalResources}/>} />
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  additionalResources: state.additionalResources
})


export default withRouter(connect(mapStateToProps)(App));
