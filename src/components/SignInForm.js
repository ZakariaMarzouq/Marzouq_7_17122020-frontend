import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useState } from "react";
import {useHistory} from 'react-router-dom';


export default function SignIn() {
  let history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (e) => {
    e.preventDefault();
    const data = { email: email, password: password };
    axios
      .post("http://localhost:5000/api/auth/login", data)
      .then((res) => {
        console.log(res.data);
        window.localStorage.setItem("accessToken", res.data.token);
        window.localStorage.setItem("userId", res.data.userId);
        window.localStorage.setItem("userName", res.data.userName);
        window.localStorage.setItem("isAdmin", res.data.isAdmin);
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email ou password incorrect !!",
        });
      });
  };

  return (
    <div className="App-body">
      <form onSubmit={(e) => handleLogin(e)} className="App-loading">
        <h1>Connexion</h1>
        <div className="App-loading-form">
          <div>
            <label htmlFor="email">Email : </label>
            <br></br>
            <input
              className="input-form"
              placeholder="Inscrivez votre email"
              size="30"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe : </label>
            <br></br>
            <input
              className="input-form"
              placeholder="Inscrivez votre Mot de passe"
              size="30"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="connexion-button">Se connecter</button>
      </form>
    </div>
  );
}
