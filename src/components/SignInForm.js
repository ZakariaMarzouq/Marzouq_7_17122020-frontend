import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignInForm = () => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // evite le rechargement
    const data = { email: email, password: password };
    axios
      .post("http://localhost:5000/api/auth/login/", data, {
        method: "POST",
        body: data,
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("accessToken", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("userName", res.data.userName);
        history.push("/");
        window.location.reload();
      })
      .catch((error) => {
        if (error.response.data.error.errors) {
          setError("L'email ou le mot de passe est incorrect.");
        } else {
          setError(error.response.data.error);
        }
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
        <div className="error">{error}</div>
        <button className="connexion-button">Se connecter</button>
      </form>
    </div>
  );
}

export default SignInForm;
