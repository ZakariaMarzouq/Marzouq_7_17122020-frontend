import React, { Component } from 'react';
//import axios from 'axios';
import Logout from "../log/Logout"
import Delete from "../log/Delete"


class User extends Component {

 
  render() {

  const token = JSON.parse(localStorage.getItem("token"));
  if(token === null) {
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


export default User;
