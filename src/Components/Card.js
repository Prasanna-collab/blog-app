import React from "react";
import { useState, useEffect } from "react";
import "./Card.css"
import {Link} from "react-router-dom"


function Card() {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    fetch("https://63aa73707d7edb3ae628645c.mockapi.io/blog")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      });
  }, []);

  return (

    <> 
      {users.map((user) => (
        <div className=" flex col-sm-12 col-md-3 col-lg-4 col-xl-2 key={user.id} ">
          
          <Link to={user.id} className="text">
          <div className="cover">
          <img src={user.cover} alt="cover" style={{"width":"20rem", "height":"10rem", "object-fit":"cover", "border-top-right-radius":"50px","border-top-left-radius":"50px" }}/>
          </div>
          <div className="content">
          <h2>{user.subtitle}</h2>
          <span>{user.title}</span>
          <p>{user.content}</p>
          </div>
          <hr/>
          <div className="profile">
            <div>
            <img src={user.profile} alt="profile" style={{"width":"50px", "height":"50px"}}/>
            </div>
            <div className="name">
            <p>{user.name}</p>
           
            <span>{user.bio}</span>
            </div>
          </div>
          </Link>
          </div>
      
      ))}
    </>
  );
}

export default Card;
