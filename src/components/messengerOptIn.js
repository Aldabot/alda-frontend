import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessengerOptIn extends Component {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    appId: PropTypes.string.isRequired,
    dataRef: PropTypes.string.isRequired,

    size: PropTypes.oneOf(['standard', 'large', 'xlarge']),
    color: PropTypes.oneOf(['blue', 'white']),
    autoLogAppEvents: PropTypes.bool,
    xfbml: PropTypes.bool,
    version: PropTypes.string,
    debug: PropTypes.bool,
    onEvent: PropTypes.func,
  };

  static defaultProps = {
    size: 'xlarge',
    xfbml: true,
    autoLogAppEvents: true,
    version: '3.1',
    language: 'en_US',
    debug: false,
    onEvent: () => {},
  };

  componentDidMount() {
    if (document.getElementById('facebook-jssdk')) {
      return;
    }
    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
  }

  setFbAsyncInit() {
    const {
      appId,
      autoLogAppEvents,
      xfbml,
      version,
      onEvent,
    } = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
        autoLogAppEvents,
        xfbml,
        version: `v${version}`,
      });

      window.FB.Event.subscribe('send_to_messenger', onEvent);
    };
  }

  loadSdkAsynchronously() {
    const { language, debug } = this.props;
    /* eslint-disable */
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = `https://connect.facebook.net/${language}/sdk${
        debug ? '/debug' : ''
      }.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    /* eslint-enable */
  }

  render() {
    const {
      appId,
      pageId,
      dataRef,
      size,
      color
    } = this.props;

    return (
      <div className="fb-send-to-messenger"
        messenger_app_id={appId}
        page_id={pageId}
        data-ref={dataRef}
        color={color}
        size={size}>
      </div>
    )
  }
}
