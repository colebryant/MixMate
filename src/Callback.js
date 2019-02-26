import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './auth/Auth';
import MixMateIcon from '../src/components/images/cocktail-shaker.png'

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    // The getProfile method allows you to get information about the logged in user
    // Use the "sub" property to tie the user in your database to the user in Auth0. This
    // Means you will add a new property called "auth0Identifier" to your user object.
    this.props.history.replace('/profile');
  }

  render() {
    return (
      <div className="callback-content">
        <p>Loading profile...</p>
        <img src={MixMateIcon} alt="MixMate Icon" />
      </div>
    );
  }
}

export default withRouter(Callback);