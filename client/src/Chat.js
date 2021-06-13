import React from "react";
import "./ChatList.css";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chats/${name}`}>
      <div className="chat">
        <Avatar
          style={{ height: "80px", width: "80px" }}
          className="chat__image"
          src={profilePic}
        />
        <div className="chat__details">
          <h2>{name}</h2>
          <p>{message}</p>
        </div>
      </div>
    </Link>
  );
}

export default Chat;
