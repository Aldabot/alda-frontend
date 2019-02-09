import React, { Component } from 'react'
import { Spin } from 'antd'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose } from 'recompose'

class ChkLoginStatus extends Component {
  state = {
    intervalId: null
  }

  componentDidMount = () => {
    const intervalId = window.setInterval(this.props.loginStatus.refetch, 1000)
    this.setState({ intervalId })
  }

  componentWillReceiveProps(nextProps) {
    // if we know status, stop querying
    if(nextProps.loginStatus.getSaltedgeLoginStatus !== 'attempting') {
      window.clearInterval(this.state.intervalId)
    }
  }

  render() {
    const loginStatus = this.props.loginStatus.getSaltedgeLoginStatus
    if(loginStatus === 'attempting') {
      return <Spin tip="Loading"/>
    } else if(loginStatus === 'success') {
      return <div>Connectado!</div>
    }
    return <div>Ha ocurrido un error!</div>
  }
}

const GET_LOGIN_STATUS = gql`
  query getSaltedgeLoginStatus ( $loginId: String!) {
    getSaltedgeLoginStatus(loginId: $loginId)
  }
`

export default compose(
  graphql(GET_LOGIN_STATUS, {
    name: 'loginStatus',
    options: (props) => {
      console.log('props', props)
      return {
      variables: {
        loginId: props.loginId
      }
      }
    }
  })
)(ChkLoginStatus)
