import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Login from '../Login/Login';
import Register from '../Register/Register';

class Loginscreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loginscreen: [],
      loginmessage: '',
      buttonLabel: 'Register',
      isLogin: true,
    };
  }

  handleClick(event) {
    // console.log("event",event);
    let loginmessage;
    if (this.state.isLogin) {
      var loginscreen = [];
      loginscreen.push(<Register parentContext={this} />);
      loginmessage = 'Already registered? Go to Login.';
      this.setState({
        loginscreen,
        loginmessage,
        buttonLabel: 'Login',
        isLogin: false,
      });
    } else {
      var loginscreen = [];
      loginscreen.push(<Login parentContext={this} />);
      loginmessage = 'Not Registered yet? Register Now!';
      this.setState({
        loginscreen,
        loginmessage,
        buttonLabel: 'Register',
        isLogin: true,
      });
    }
  }

  componentDidMount() {
    const loginscreen = [];
    loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext} />);
    const loginmessage = 'Not registered yet? Register Now!';
    this.setState({
      loginscreen,
      loginmessage,
    });
  }

  render() {
    return (
      <div className="loginscreen">
        {this.state.loginscreen}
        <div style={container}>
          {this.state.loginmessage}
          <MuiThemeProvider>
            <div style={container}>
              <Button color="default" size="large" style={style} onClick={event => this.handleClick(event)}>
                {this.state.buttonLabel}
              </Button>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
const style = {
  margin: 15,
  backgroundColor: '#00316b',
  color: '#FFFFFF',
};

const container = {
  textAlign: 'center',
};
export default Loginscreen;
