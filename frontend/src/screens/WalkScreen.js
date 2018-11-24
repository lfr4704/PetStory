import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Walk from '../components/Walk/Walk';
import Navigation from '../components/Navigation/Navigation.js';
import SideDrawer from '../components/SideDrawer/SideDrawer.js';
import Backdrop from '../components/Backdrop/Backdrop.js';

class WalkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walk: null,
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

  // this is called a life cycle method
  componentDidMount() {
    const { match } = this.props;
    this.walkId = match.params.walkId; // params is for router functionallity
    this.fetchWalk();
  }

  fetchWalk() {
    const url = `http://localhost:8000/api/walks/${this.walkId}/`;
    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((walkJson) => {
        console.log(walkJson);
        this.setState({
          walk: walkJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }


  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    const { walk } = this.state;
    return (
      <div>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <Walk walk={walk} />
      </div>


    );
  }
}

export default WalkScreen;
