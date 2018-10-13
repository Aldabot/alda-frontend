import React, { Component } from 'react'
import { Button, message } from 'antd';
import ProviderList from './components/ProviderList'
import ProviderLoginForm from './components/ProviderLoginForm'

class CreateLogin extends Component {
  state = {
    current: 0,
    provider: null
  }

  selectProvider = (provider) => this.setState({ provider, current: 1 })

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { psid } = this.props
    const { current, provider} = this.state;

    const steps = [{
      title: 'First',
      content: <ProviderList selectProvider={this.selectProvider} />,
    }, {
      title: 'Second',
      content: <ProviderLoginForm provider={provider} psid={psid} />,
    }, {
      title: 'Last',
      content: 'Last-content',
    }];

    return (
      <div>
        <div className="steps-action">
          {
            current === steps.length - 1
            && <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
          }
          {
            current > 0
            && (
              <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                Previous
              </Button>
            )
          }
        </div>
        <div className="steps-content">{steps[current].content}</div>
      </div>
    );
  }
}

export default CreateLogin
