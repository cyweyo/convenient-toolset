import React, { useState, useEffect } from 'react';
import WebSocket from 'ws';

const Test = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080/socket');


    ws.onopen = () => {
      console.log('WebSocket Client Connected');
    };

    ws.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };

    setWs(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && inputValue.trim() !== '') {
      ws.send(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Simple Chat App</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Test;
