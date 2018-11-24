import React from 'react';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Navigation.css';


const navigation = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div className="toolbar_toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar_logo"><a href="/">The Logo</a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
        </ul>

      </div>
    </nav>
  </header>

);


export default navigation;
