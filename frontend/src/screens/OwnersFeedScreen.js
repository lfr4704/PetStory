import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import OwnerFeed from '../components/OwnerFeed/OwnerFeed';

class OwnersFeedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ownerFeed: null,
    };
  }

  componentDidMount() {
    const {match} = this.props;
    this.ownerFeedId = match.params.ownerFeedId // params is for router functionality
    this.fetchOwnerFeed();
  }

  fetchOwnerFeed() {
    const url = `http://localhost:8000/api/owners/${this.ownerFeedId}/feed/`;

    fetch(url) // eslint-disable-line no-undef
      .then(response => response.json())
      .then((ownerFeedJson) => {
      console.log(ownerFeedJson)
        this.setState({
          ownerFeed: ownerFeedJson,

        });
      })

      .catch(error => console.log('fetch error', error));
  }

  render() {
   const { ownerFeed } = this.state;
    return (
        <div>
          <OwnerFeed ownerFeed={ownerFeed} />
        </div>
    );
  }
}

export default OwnersFeedScreen;
