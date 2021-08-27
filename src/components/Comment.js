import React from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import "../style/comment.css"
import { useState } from "react";

export default function CommentNew(props) {
  const [newComment, setNewComment] = useState([]);
  const postId = props.postId;
  const invoice = { ...newComment, postId: postId };

  const handleChange = (e) => {
    const firstName = e.target.firstName;
    const value = e.target.value;
    setNewComment({ ...newComment, [firstName]: value });
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post("http://localhost:5000/api/comments", invoice, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        window.alert(
          "Une erreur est survenue, veuillez réessayer plus tard. Si le problème persiste, contactez l'administrateur du site"
        );
      });
  };
  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-10 col-lg-12 mt-5 mx-5 mb-3 rounded bg-profile text-center text-white newComment">
          <h5 className="mt-4 mb-2">Commentez</h5>
          <form>
            
              as="textarea"
              rows={1}
              name="content"
              onChange={handleChange}
           

            <div className="form-submit mt-2 mb-2">
              <button
                className="bouton btn  btn-sm mx-5 "
                onClick={handleSubmitComment}
              >
                Publier
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}