import React from 'react'
import { connect } from 'dva'
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <>
        <div>Login</div>
      </>
    )
  }
}

export default connect(({ login }) => ({ login }))(Login)
