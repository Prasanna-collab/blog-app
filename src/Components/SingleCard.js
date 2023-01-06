import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./SingleCard.css";
import axios from "axios";

function SingleCard() {
  let params = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    set(params.id);
    console.log(params);
  }, [params]);

  const set = async (id) => {
    let data = await axios.get(
      "https://63aa73707d7edb3ae628645c.mockapi.io/blog/" + id
    );
    setUsers(data.data);
    console.log([data.data]);
  };

  return (
    <div>
      <div className=" con col-sm-4 key={user.id} ">
        <div className="">
          <div className="background">
            <img
              src={users.cover}
              alt="cover"
              style={{ width: "auto", height: "10rem", "object-fit": "cover" }}
            />
          </div>
          <div className="new">
            <h2>{users.subtitle}</h2>
            <span className="span">{users.title}</span>
            <p>{users.content}</p>
          </div>
          <hr />
          <div className="profile">
            <div>
              <img
                src={users.profile}
                alt="profile"
                style={{ width: "50px", height: "50px" }}
              />
            </div>
            <div className="avatar">
              <p>{users.name}</p>
              <span style={{ color: "white" }}>{users.bio}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
