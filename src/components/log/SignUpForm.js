import React from "react";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {useHistory} from 'react-router-dom';



export default function SignUp(props) {
    let history = useHistory();
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== controlPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Les passwords ne correspondent pas !!",
      });
    } else {
      try {
        const data = {lastName: lastName, firstName: firstName, email: email, password: password}
        const res = await axios.post("http://localhost:5000/api/auth/register", data, {
          method: 'POST',
          body: data,
          headers: { 'Content-Type': 'application/json' },
        })
        Swal.fire({
          title: "Création de compte réussie",
          confirmButtonText: `SignIn`,
          confirmButtonColor: "#3085d6",
        }).then((result) => {
          if (result.isConfirmed) {
            history.push('/login')
          }
        });
      } catch (e) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Votre nom, prénom ou email non valide",
        });
      }
    }
  };

  return(
    <div className="App-body">
        <form onSubmit={e => handleRegister(e)} className="App-signup">
            <h1>Inscription</h1>
            <div className="App-loading-form">
                <div>
                    <label htmlFor="lastName">Nom : </label>
                    <br></br>
                    <input className="input-form" placeholder="Inscrivez votre Nom" size="30" type="text" id="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="firstName">Prénom : </label>
                    <br></br>
                    <input className="input-form" placeholder="Inscrivez votre Prénom" size="30" type="text" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <br></br>
                    <input className="input-form" placeholder="Inscrivez votre email" size="30" type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe : </label>
                    <br></br>
                    <input className="input-form" placeholder="Inscrivez votre Mot de passe" size="30" type="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="controlPassword">Confirmer le Mot de passe : </label>
                    <br></br>
                    <input className="input-form" placeholder="Inscrivez votre Mot de passe" size="30" type="controlPassword" id="controlPassword" value={controlPassword} onChange={e => setControlPassword(e.target.value)}/>
                </div>
            </div>
            <button className="connexion-button">S'inscrire</button>
        </form>
    </div>
);
}
