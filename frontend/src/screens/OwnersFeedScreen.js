import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import OwnerFeed from '../components/OwnerFeed/OwnerFeed';
import Navigation from '../components/Navigation/Navigation.js';
import SideDrawer from '../components/SideDrawer/SideDrawer.js';
import Backdrop from '../components/Backdrop/Backdrop.js';
import ApiClient from '../ApiClient';


class OwnersFeedScreen extends Component {
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

  componentDidMount() {
    const { match } = this.props;
    this.ownerId = match.params.ownerId; // params is for router functionality
    ApiClient.getOwnerFeed(this.ownerId, this.onGetOwnerFeedSuccess);
  }

  onGetOwnerFeedSuccess = (ownerFeedJson) => {
    this.setState({ ownerFeed: ownerFeedJson });
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const { ownerFeed } = this.state;

    // TODO should nav be global?
    // <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
    // <SideDrawer show={this.state.sideDrawerOpen} />
    // {backdrop}

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <OwnerFeed ownerFeed={ownerFeed} />
      </div>
    );
  }
}

export default OwnersFeedScreen;
