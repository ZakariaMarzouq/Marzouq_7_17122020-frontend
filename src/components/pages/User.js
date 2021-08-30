import React, { Component } from 'react';
//import axios from 'axios';
import Logout from "../log/Logout"
import Delete from "../log/Delete"


class Users extends Component {

 
  render() {

  const tokenId = JSON.parse(localStorage.getItem(('accessToken')))
  if(tokenId === null) {
    window.location = "/user"
  }
    return (
      <div className="App-body">
        <h1>Profil</h1>
        <Logout />
        <br /><Delete />
      </div>
    );
  }

}


export default Users;