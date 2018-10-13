import React, { Component } from 'react'
import authenticator from './services/authenticator'
import CreateLogin from './scenes/CreateLogin'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.props.psid}
          </p>
          <CreateLogin />
        </header>
      </div>
    );
  }
}

export default authenticator(App);
