import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {email: '', password: '', errorMsg: '', isError: false}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('JWT_TOKEN', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {email, password} = this.state
    const userDetails = {email, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }

    // if (email === 'munisampangi@gmail.com' && password === 'Muni@12345') {
    //   console.log(email)
    //   console.log(password)
    //   const {history} = this.props
    //   history.replace('/')
    // }/
    else {
      // console.log(this.state.errorMsg)
      this.setState({isError: true, errorMsg: 'Invalid Credentials'})
    }
  }

  onchangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {email, password, isError, errorMsg} = this.state

    return (
      <div className="login-container">
        <div className="board-section">
          <h1 className="login-heading">Board .</h1>
        </div>
        <div className="login-section">
          <h1>Sign In</h1>
          <form className="form-section" onSubmit={this.submitForm}>
            <label htmlFor="email">Email Address</label>
            <input
              className="input-element"
              type="text"
              value={email}
              id="email"
              placeholder="Enter email"
              onChange={this.onchangeEmail}
            />
            <label htmlFor="pass">Password</label>
            <input
              className="input-element"
              type="password"
              id="pass"
              value={password}
              placeholder="Password"
              onChange={this.onchangePassword}
            />
            <button type="submit" className="submit-button">
              Sign in
            </button>
            {isError && <p style={{color: 'red'}}>{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}
export default Login
