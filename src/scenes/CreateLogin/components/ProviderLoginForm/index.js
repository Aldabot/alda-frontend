import React, { Component, Fragment } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

const FormItem = Form.Item;

class ProviderLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const {
        createUser,
        createSaltedgeCustomer,
        createSaltedgeLogin
      } = this.props

      if (err)
        return null

      createUser()
          .then(_ => createSaltedgeCustomer())
          .then(_ => createSaltedgeLogin({
            variables: {
              ...values
            }
          })).then(res => console.log('ok', res)).catch(err => console.log(err))


      /* this.props.mutate().then(res => console.log(res)).catch(err => console.error(err)) */
    });
  }

  render() {
    const {
      form: { getFieldDecorator },
      provider: { name },
    } = this.props;

    return (
      <Fragment>
        <h2>{name}</h2>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
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

const CREATE_USER = gql`
  mutation ( $psid: String! ) {
    createUser( psid: $psid ) {
      id
    }
  }
`
const CREATE_SALTEDGE_CUSTOMER = gql`
  mutation ( $psid: String! ) {
    createSaltedgeCustomer( psid: $psid ) {
      id
    }
  }
`
const CREATE_SALTEDGE_LOGIN = gql`
  mutation (
    $psid: String!
    $username: String!
    $password: String!
    $provider: String!
  ) {
    createSaltedgeLogin(
      psid: $psid
      username: $username
      password: $password
      provider: $provider
    ) {
      id
    }
  }
`

export default compose(
  Form.create(),
  graphql(CREATE_USER, {
    name: 'createUser',
    options: (props) => ({
      variables: {
        psid: props.psid
      }
    })
  }),
  graphql(CREATE_SALTEDGE_CUSTOMER, {
    name: 'createSaltedgeCustomer',
    options: (props) => ({
      variables: {
        psid: props.psid
      }
    })
  }),
  graphql(CREATE_SALTEDGE_LOGIN, {
    name: 'createSaltedgeLogin',
    options: (props) => ({
      variables: {
        psid: props.psid,
        provider: props.provider.code
      }
    })
  })
)(ProviderLoginForm)
