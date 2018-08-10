import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Walk from '../components/Walk/Walk';


class WalkScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walk: null,
    };
  }

  componentDidMount() {
    const {match} = this.props;
    this.walkId = match.params.walkId; //params is for router functionallity 
    this.fetchWalk();
  }

  fetchWalk() {
    const url = `http://localhost:8000/api/walks/${this.walkId}/`;
    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((walkJson) => {
      console.log(walkJson)
        this.setState({
          walk: walkJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }


  render() {  
    const { walk } = this.state;
    return (

        <div>
          <Walk walk={walk} />
        </div>
       

    );
  }
}

export default WalkScreen;


