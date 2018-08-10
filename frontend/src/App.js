import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
} from 'react-router-dom';
import './App.css';
import Walkers from './components/Walkers/Walkers';
import Walk from './components/Walk/Walk';
import Owners from './components/Owners/Owners';
import WalkerScreen from './screens/WalkerScreen'
import WalkScreen from './screens/WalkScreen';
import OwnersScreen from './screens/OwnersScreen';
import OwnersFeedScreen from './screens/OwnersFeedScreen';


class App extends Component {

  render() {
     
    return (
      <BrowserRouter>
        <div>
          <p>hello</p>
          <Route exact path="/walkers/:walkerId" component={WalkerScreen}/>
          <Route exact path="/walk/:walkId" component={WalkScreen}/>
          <Route exact path="/owner/:ownerId" component={OwnersScreen}/>
          <Route exact path="/ownerFeed/:ownerFeedId" component={OwnersFeedScreen}/>
        </div>
       
      </BrowserRouter>

    );
  }
}

export default App;

