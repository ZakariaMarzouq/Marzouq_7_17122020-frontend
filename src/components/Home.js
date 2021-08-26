import React, { useEffect, useState } from "react";
import axios from 'axios';


// fonction de récupération de tous les articles


const Home = () => {
    const [listPost, setListPost] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'))
    useEffect ( () => {
        axios.get("http://localhost:5000/api/posts/", {
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            },
        })
        .then(res => {
            setListPost(res.data)
        })
    }, []) // Evite la répétition

    return (
        <div className="App-body">
            { listPost.map( (post, key) => {

                return <div key={key} className="App-comment">
                    <div className="title">
                        <h3>{post.title}</h3>
                    </div>
                    <div className="body">
                        {post.content}
                    </div>
                    <br></br>
                    <img className="image" src={post.imageUrl} alt=""/>
                    <br></br>
                    <div className="date">
                        <p><em>Post créé le {post.createdAt}</em></p>
                    </div>
                </div>

            }) }
       </div>
    )
        
}

export default Home;
