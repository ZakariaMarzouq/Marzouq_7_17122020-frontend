import React, { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom';

const SignUpForm = () => {
    let history = useHistory();
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

    const handleRegister = (e) => {
        e.preventDefault() // evite le rechargement
        const data = {lastName: lastName, firstName: firstName, email: email, password: pass}
        axios.post("http://localhost:5000/api/auth/register", data, {
            method: 'POST',
            body: data,
            headers: { 'Content-Type': 'application/json' },
          })
        .then(res => { 
            history.push('/login')
        })
        .catch( (error) => {
            setError(error.res.data.error)
        })
    }

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
                        <input className="input-form" placeholder="Inscrivez votre Mot de passe" size="30" type="password" id="password" value={pass} onChange={e => setPass(e.target.value)}/>
                    </div>
                </div>
                <div className="error">{error}</div>
                <button className="connexion-button">S'inscrire</button>
            </form>
        </div>
    );
}

export default SignUpForm;
