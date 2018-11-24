import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Login from '../Login/Login';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
  }

  handleClick(event) {
    const apiBaseUrl = 'http://localhost:4000/api/';
    console.log('values', this.state.first_name, this.state.last_name, this.state.email, this.state.password);
    // To be done:check for empty values before hitting submit
    const self = this;
    const payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
    };
    axios.post(`${apiBaseUrl}/register`, payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
        //  console.log("registration successfull");
          const loginscreen = [];
          loginscreen.push(<Login parentContext={this} />);
          const loginmessage = 'Not Registered yet. Go to registration';
          self.props.parentContext.setState({
            loginscreen,
            loginmessage,
            buttonLabel: 'Register',
            isLogin: true,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={container}>
            <Typography style={typography} variant="title">
              Register now
            </Typography>
            <TextField
              hintText="Enter your First Name"
              placeholder="First Name"
              onChange={(event, newValue) => this.setState({ first_name: newValue })}
              margin="normal"
            />
            <br />
            <TextField
              hintText="Enter your Last Name"
              placeholder="Last Name"
              onChange={(event, newValue) => this.setState({ last_name: newValue })}
              margin="normal"
            />
            <br />
            <TextField
              hintText="Enter your Email"
              type="email"
              placeholder="Email"
              onChange={(event, newValue) => this.setState({ email: newValue })}
              margin="normal"
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              placeholder="Password"
              onChange={(event, newValue) => this.setState({ password: newValue })}
              margin="normal"
            />
            <br />
            <Button size="large" style={style} onClick={event => this.handleClick(event)}>
            Submit
            </Button>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const typography = {
  marginTop: 15,
  textDecoration: 'none',
  fontSize: 20,
  color: 'inherit',
};

const style = {
  margin: 15,
  backgroundColor: '#00316b',
  color: '#FFFFFF',
};

const container = {
  textAlign: 'center',
};
export default Register;
