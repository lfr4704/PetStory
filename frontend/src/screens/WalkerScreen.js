import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Walkers from '../components/Walkers/Walkers';


class WalkerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walker: null,
    };
  }

  componentDidMount() {
    const {match} = this.props;
    this.walkerId = match.params.walkerId // params is for router functionality
    this.fetchWalker();
  }

  fetchWalker() {
    const url = `http://localhost:8000/api/walkers/${this.walkerId}/`;

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((walkerJson) => {
      console.log(walkerJson)
        this.setState({
          walker: walkerJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }


  render() {
    const { walker } = this.state;
    return (
        <div>
          <Walkers walker={walker} />
        </div>
    );
  }
}

export default WalkerScreen;
