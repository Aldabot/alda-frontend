import React, { Component } from 'react'
import authenticator from './services/authenticator'
import CreateLogin from './scenes/CreateLogin'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

import './App.css'


class App extends Component {
  componentDidMount() {
    this.props.createSaltedgeCustomer().then(res => console.log('succ', res)).catch(err => console.error('saltedge create customer:', err))
  }

  render() {
    const { psid } = this.props
    return (
      <div className="App">
        <div className="Content">
          <CreateLogin psid={psid} />
        </div>
      </div>
    );
  }
}

const CREATE_SALTEDGE_CUSTOMER = gql`
  mutation ( $psid: String! ) {
    createSaltedgeCustomer( psid: $psid ) {
      id
    }
  }
`

export default compose(
  authenticator,
  graphql(CREATE_SALTEDGE_CUSTOMER, {
    name: 'createSaltedgeCustomer',
    options: (props) => ({
      variables: {
        psid: props.psid
      }
    })
  })
)(App)
