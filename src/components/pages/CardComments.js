import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CardComments = (props) => {
  let history = useHistory();
  const [newComment, setNewComment] = useState([]);
  const [error, setError] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault(); // evite le rechargement
    
    const token = JSON.parse(localStorage.getItem("token"));
    const postId = JSON.parse(localStorage.getItem("postId"));
    const data = new FormData();
  
    console.log(postId);

    data.append("newComment", newComment);
    data.append("userId", localStorage.getItem("userId"));
    data.append("postId", localStorage.getItem("postId"));

    axios
      .post(`http://localhost:5000/api/comments/${postId}`, data, {
        method: "patch",
        body: data,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((error) => {
        setError(error.res.data.error);
      });
  };

  return (
    <div className="App-body">
      <form onSubmit={(e) => handleSubmit(e)} className="App-post">
        <h3>Ecrire un commentaire :</h3>
        <div className="App-loading-form">
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
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
          </div>
        </div>
        <div className="error">{error}</div>
        <button className="connexion-button">Valider le commentaire</button>
      </form>
    </div>
  );
};

export default CardComments;