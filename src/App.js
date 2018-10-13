import React, { Component } from 'react'
import authenticator from './services/authenticator'
import CreateLogin from './scenes/CreateLogin'
import './App.css'


class App extends Component {
  render() {
    const { psid } = this.props
    return (
      <div className="App">
        <header className="App-header">
          <CreateLogin psid={psid} />
        </header>
      </div>
    );
  }
}

export default authenticator(App)
