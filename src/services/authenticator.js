import React, { Component } from 'react'

const authenticator = (WrappedComponent) => {
  return class MessengerOptIn extends Component {
    state = {
      loading: true,
      psid: null
    }

    componentDidMount() {
      /* if (document.getElementById('facebook-jssdk')) {
       *   return;
       * } */
      this.setFbAsyncInit();
      this.loadSdkAsynchronously();
    }

    setFbAsyncInit = () => {
      const self = this
      window.extAsyncInit = function() {
        window.MessengerExtensions.getContext(
          '598231856876775',
          function success(ctx) {
            self.setState({ loading: false, psid: ctx.psid })
          },
          function error(err){
            console.error(err)
          }
        );
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
      if(this.state.loading)
        return (<div>Loading...</div>)

      return (
        <WrappedComponent psid={this.state.psid} {...this.props} />
      )
    }
  }
}

export default authenticator
