import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Post = () => {
  let history = useHistory();
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [error, setError] = useState("")

  const undleSubmit = (e) => {
      e.preventDefault() // evite le rechargement
      const token = JSON.parse(localStorage.getItem('token'))
      const data = new FormData();
      
      data.append('title', title);
      data.append('content', content);
      data.append('userId', localStorage.getItem("userId"));
      
      axios.post("http://localhost:5000/api/posts/", data, {
          method: 'POST',
          body: data,
          headers: {
              "Content-Type": 'application/json',
              'Authorization': 'Bearer ' + token
          },
        })
      .then(res => {
        console.log(res);
          history.push('/');
      })
      .catch( (error) => {
          setError(error.res.data.error)
      })
  }


  return (
    <div className="App-body">
      <form onSubmit={(e) => undleSubmit(e)} className="App-post">
        <h1>Poster un message :</h1>
        <div className="App-loading-form">
          <div>
            <label htmlFor="title">Titre : </label>
            <br></br>
            <input
              className="input-form"
              placeholder="Inscrivez votre titre"
              size="30"
              maxLength="30"
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="comment">Commentaire : </label>
            <br></br>
            <textarea
              className="input-form-comment"
              placeholder="Inscrivez votre texte"
              width="200"
              maxLength="250"
              type="text"
              id="comment"
              name="comment"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>
        <div className="error">{error}</div>
        <button className="connexion-button">Créer le post !</button>
      </form>
    </div>
  );
}

export default Post;
