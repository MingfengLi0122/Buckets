import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

// import TextContainer from '../TextContainer/TextContainer';
import Messages from './Messages';
import InfoBar from "./InfoBar";
import Input from "./Input";

import "../styles/NewChat.scss";

const ENDPOINT = 'http://localhost:3002';

// pass data into socket
let socket;

const Chat = (props) => {
  const { userName, question } = props;

  const [name, setName] = useState(userName);
  const [room, setRoom] = useState(question);
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    
    // const { name, room } = queryString.parse(location.search);
    // pass endpoint to server localhost:3002
    socket = io(ENDPOINT, { transports: ["websocket"]});

    // console.log("room ----", room);
    // console.log("name ----", name);

    setRoom(room);
    setName(name);

    // emit from client side socket with join even
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        // alert(error);
      }
    });
  }, [userName, question]);

  useEffect(() => {
    // wait message event from backend
    socket.on("message", (message) => {
      // setMessages to message sate
      setMessages(messages => [ ...messages, message ]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  // Testing messages record and message
  // console.log(message, messages);

  return (
    <div className="outerContainer">
      <div className="container">
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
