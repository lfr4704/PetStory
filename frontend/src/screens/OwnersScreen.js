import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Owners from '../components/Owners/Owners';
import Navigation from '../components/Navigation/Navigation.js';
import SideDrawer from '../components/SideDrawer/SideDrawer.js';
import Backdrop from '../components/Backdrop/Backdrop.js';

class OwnersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: null,
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
    this.ownerId = match.params.ownerId; // params is for router functionality
    this.fetchOwner();
  }

  fetchOwner() {
    const url = `http://localhost:8000/api/owners/${this.ownerId}/owner-details-form/`;

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((ownerJson) => {
        console.log(ownerJson);
        this.setState({
          owner: ownerJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const { owner } = this.state;
    return (
      <div>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Owners owner={owner} />
      </div>
    );
  }
}

export default OwnersScreen;
