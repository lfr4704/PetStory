import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Walkers from '../components/Walkers/Walkers';
import Navigation from '../components/Navigation/Navigation.js';
import SideDrawer from '../components/SideDrawer/SideDrawer.js';
import Backdrop from '../components/Backdrop/Backdrop.js';

class WalkerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walker: null,
    };
  }

  state ={
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler= () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    const { match } = this.props;
    this.walkerId = match.params.walkerId; // params is for router functionality
    this.fetchWalker();
  }

  fetchWalker() {
    const url = `http://localhost:8000/api/walkers/${this.walkerId}/`;

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((walkerJson) => {
        console.log(walkerJson);
        this.setState({
          walker: walkerJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const { walker } = this.state;
    return (
      <div>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Walkers walker={walker} />
      </div>
    );
  }
}

export default WalkerScreen;
