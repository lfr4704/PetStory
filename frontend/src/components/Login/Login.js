import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Home from '../Home/Home';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }


  handleClick(event) {
    const apiBaseUrl = 'http://localhost:4000/api/';
    const self = this;
    const payload = {
      email: this.state.username,
      password: this.state.password,
    };
    axios.post(`${apiBaseUrl}login`, payload)
      .then((response) => {
        console.log(response);
        if (response.data.code == 200) {
          console.log('Login successfull');
          const uploadScreen = [];
          uploadScreen.push(<Home appContext={self.props.appContext} />);
          self.props.appContext.setState({ loginPage: [], uploadScreen });
        } else if (response.data.code == 204) {
          console.log('Username password do not match');
          alert('username password do not match');
        } else {
          console.log('Username does not exists');
          alert('Username does not exist');
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
              Login
            </Typography>
            <TextField
              hintText="Enter your Username"
              placeholder="Username"
              onChange={(event, newValue) => this.setState({ username: newValue })}
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

export default Login;
