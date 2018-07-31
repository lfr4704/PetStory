import React, { Component } from 'react';
import './App.css';
import Walkers from './components/Walkers/Walkers';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walker: null,
    };
  }

  componentDidMount() {
    this.fetchWalker();
  }

  fetchWalker() {
    const walkerId = 1;
    const url = `http://localhost:8000/api/walkers/${walkerId}/`;

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((walkerJson) => {
      // console.log(walkerJson)
        this.setState({
          walker: walkerJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }

  render() {
    const { walker } = this.state; //for simplicity and readability define constant 
    return (
      <div>
        <Walkers walker={walker} />
      </div>

    );
  }
}

export default App;
