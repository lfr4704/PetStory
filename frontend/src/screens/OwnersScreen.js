import React, { Component } from 'react';
import { 
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Owners from '../components/Owners/Owners';


class OwnersScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: null,
    };
  }

  componentDidMount() {
    const {match} = this.props;
    this.ownerId = match.params.ownerId // params is for router functionality 
    this.fetchOwner();
  }

  fetchOwner() {
    const url = `http://localhost:8000/api/owners/${this.ownerId}/owner-details-form/`;

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((ownerJson) => {
      console.log(ownerJson)
        this.setState({
          owner: ownerJson,
        });
      })

      .catch(error => console.log('fetch error', error));
  }


  render() {  
    const { owner } = this.state;
    return (

        <div>
          <Owners owner={owner} />
          
          
        </div>

       

    );
  }
}

export default OwnersScreen;