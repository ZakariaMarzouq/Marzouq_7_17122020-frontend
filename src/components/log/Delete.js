import React from "react";
import axios from "axios";
const API = 'http://localhost:5000/api/user/delete'

const Delete = () => {
  
  const tokenId = JSON.parse(localStorage.getItem(('accessToken')))
  axios.defaults.headers.common = {'Authorization': `Bearer ${tokenId.token}`}

  const deleteProfile = async()=> {
    if (window.confirm("Voulez-vous vraiment supprimer votre profil ?"))
    {
  axios.post(API)
  .then((res) => {
    console.log(res.data)
}).catch((error) => {
    console.log(error)
});
    localStorage.clear()
    window.location = "/";
}
  };

  return (
    <div>
      <button onClick={deleteProfile} className="delete">Supprimer son profil</button>
    </div>
  );
};

export default Delete;