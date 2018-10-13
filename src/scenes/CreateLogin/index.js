import React, { Component } from 'react'
import { Button, message } from 'antd';
import BankList from './components/BankList'
import BankLoginForm from './components/BankLoginForm'

class CreateLogin extends Component {
  state = {
    current: 0,
    bank: null
  }

  selectBank = (bank) => this.setState({ bank, current: 1 })

  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  render() {
    const { current, bank } = this.state;

    const steps = [{
      title: 'First',
      content: <BankList selectBank={this.selectBank}/>,
    }, {
      title: 'Second',
      content: <BankLoginForm bank={bank}/>,
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
