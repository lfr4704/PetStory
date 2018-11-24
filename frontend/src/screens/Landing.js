import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Navigation from '../components/Navigation/Navigation.js';
import SideDrawer from '../components/SideDrawer/SideDrawer.js';
import Backdrop from '../components/Backdrop/Backdrop.js';
import Home from '../components/Home/Home.js';
import './Landing.css';
import Loginscreen from '../components/Loginscreen/Loginscreen';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Landing extends Component {
  constructor(props){
    super(props);
     this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }

  state ={
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () =>{
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler= () => {
    this.setState({sideDrawerOpen: false})
  };

  componentDidMount(){
    var loginPage =[];
    loginPage.push(<Loginscreen parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }

  render() {
    let backdrop;

    if(this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div>
        <Navigation drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <div className="top-container">
          <div className="grid-header">
            <h1>Build trust</h1>
            <p><span>Provide personalized and superior pet services that you control.</span></p>
          </div>
          <div className="grid-image">
            <img src="http://dogsbreedscenter.com/wp-content/uploads/2018/08/This-Is-How-You-Can-Teach-Your-Dog-To-Shake-Hands.jpg"></img>
          </div>
          <div className="grid-footer">
            <p><span>Enhance or start your own Pet Service business <a href="www.google.com">Learn more.</a></span></p>
            <h1>Give love. Earn income</h1>
          </div>
          <div className="grid-form">
            {this.state.loginPage}
            {this.state.uploadScreen}
          </div>
        </div>
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default Landing;
