import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const socketConnectionOptions =  {
  "force new connection" : true,
  "reconnectionAttempts": "Infinity",
  "timeout" : 10000,
  "transports" : ["websocket"]
};

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'localhost:5000';
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    
    socket = io(ENDPOINT, socketConnectionOptions);
    
    setName(name);
    setRoom(room);
    
    socket.emit('join', { name, room }, () => {
    
    });
    
    return () => {
      socket.emit('disconnect');
      
      socket.off();
    };
  }, [ENDPOINT, location.search]);
  
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);
  
  const sendMessage = (event) => {
    event.preventDefault();
    
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };
  
  console.log(message, messages);
  
  return (
    <div className="outerContainer">
      <div className="container">
        <input type="text" value={message}
               onChange={(event) => setMessages(event.target.value)}
               onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null} />
      </div>
    </div>
  );
};

export default Chat;