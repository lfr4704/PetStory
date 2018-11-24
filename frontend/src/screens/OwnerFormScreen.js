import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import OwnerForm from '../components/OwnerForm/OwnerForm';
import Navigation from '../components/Navigation/Navigation.js';
import SideDrawer from '../components/SideDrawer/SideDrawer.js';
import Backdrop from '../components/Backdrop/Backdrop.js';

class OwnersFormScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerFeed: null,
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


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <OwnerForm />
      </div>
    );
  }
}

export default OwnersFormScreen;
