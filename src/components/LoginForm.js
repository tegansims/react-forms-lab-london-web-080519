import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      password: ''
    };
  }

  updateTextChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  updatePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  checkLoginDetails = e => {
    e.preventDefault()
    console.log(this.state.text)
    if (this.state.text === "" || this.state.password === "") return;
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.checkLoginDetails}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.text} onChange={this.updateTextChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.updatePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
