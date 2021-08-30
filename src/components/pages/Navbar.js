import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Swal = require('sweetalert2');

const UserGreeting = (props) => {
  return (
    <div className="App-connexion">
      <div>
        <h2>
          Bonjour, <br />
          <br />
          {localStorage.getItem("userName")}
        </h2>
        <NavLink className="App-connexion-link" to="/">
          <p>Acceuil</p>
        </NavLink>
        <button className="button-disconnect" onClick={() => Disconnect()}>
          Déconnexion
        </button>
      </div>
      <NavLink className="App-connexion button" to="/post">
        <p className="App-groupotter">Ajouter un post</p>
      </NavLink>
      <NavLink className="App-connexion-button" to="/user">
          <p>Supprimer le compte</p>
        </NavLink>
    </div>
  );
};

const Disconnect = () => {

  Swal.fire({
    title:'Êtes-vous sûr(e) ?',
    text: 'Une fois déconnecé(e), vous ne pourrez plus créer de post !',
    icon:'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Me déconnecter'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Déconnecté(e)'
      )
      localStorage.clear()
      window.location.reload()
    }
  })
};


const GuestGreeting = (props) => {
  return(
    <div className="App-connexion">
      <div>

        <NavLink className="App-connexion-link" to='/'>
          <p>Accueil</p>
        </NavLink>

        <NavLink className="App-connexion-link" to='/login'>
          <p>Se connecter</p>
        </NavLink>

        <NavLink className="App-connexion-link" to='/register'>
          <p>S'inscrire</p>
        </NavLink>
      </div>
      <NavLink className="App-connexion-button" to="/post">
        <div>
            <p className="App-groupotter">Ajoute un post !</p>
        </div>
      </NavLink>
    </div>
  )
};


const Navigation = (props) => {
  const isLoggedIn = localStorage.getItem('accessToken');
  let [userLogged] = useState(isLoggedIn);
  if(userLogged) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}



export default Navigation;
