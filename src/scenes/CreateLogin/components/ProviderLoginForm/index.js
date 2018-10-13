import React, { Component, Fragment } from 'react'
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class ProviderLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {
      form: { getFieldDecorator },
      provider: { name }
    } = this.props;

    return (
      <Fragment>
        <h2>{name}</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
               rules: [{ required: true, message: 'Please input your username!' }],
            })(
               <Input
                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                 placeholder="Username"
               />
             )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
               rules: [{ required: true, message: 'Please input your Password!' }],
            })(
               <Input
                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                 type="password"
                 placeholder="Password"
               />
             )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
          </FormItem>
        </Form>
      </Fragment>
    );
  }
}

export default Form.create()(ProviderLoginForm)
