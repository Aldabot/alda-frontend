import React, { Component } from 'react';

export default class MessengerOptIn extends Component {
  componentDidMount() {
    /* if (document.getElementById('facebook-jssdk')) {
     *   return;
     * } */
    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
  }

  setFbAsyncInit() {
    console.log('jojo')
    window.extAsyncInit = function() {
      window.MessengerExtensions.getContext('598231856876775',
        function success(thread_context){
          console.log(thread_context)
        },
        function error(err){
          console.error(err)
        }
      );
      // the Messenger Extensions JS SDK is done loading 
      /* console.log(MessengerExtensions) */
    };
  }

  loadSdkAsynchronously() {
    /* eslint-disable */
    (function(d, s, id){
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/messenger.Extensions.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'Messenger'))
    /* eslint-enable */
  }

  render() {
    return (
      <div>
        test
      </div>
    )
  }
}
