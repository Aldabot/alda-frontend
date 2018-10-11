import React, { Component } from 'react'
import logo from './logo.svg'
import { DatePicker } from 'antd'
import MessengerOptIn from './components/messengerOptIn'
import MessengerSDK from './components/messengerSDK.js'
import './App.css'

/* (function(d, s, id){
 *   var js, fjs = d.getElementsByTagName(s)[0];
 *   if (d.getElementById(id)) {return;}
 *   js = d.createElement(s); js.id = id;
 *   js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
 *   fjs.parentNode.insertBefore(js, fjs);
 * }(document, 'script', 'Messenger'));
 * 
 * window.extAsyncInit = function() {
 *   // the Messenger Extensions JS SDK is done loading
 *   console.log('window', window)
 *   window.MessengerExtensions.getContext('598231856876775',
 *     function success(thread_context){
 *       console.log(thread_context)
 *     },
 *     function error(err){
 *       console.error(err)
 *     }
 *   );
 * }; */

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <DatePicker />
          <MessengerOptIn
            pageId='515235208535564'
            appId='598231856876775'
            dataRef="test"
          />
          <MessengerSDK />
        </header>
      </div>
    );
  }
}

export default App;
