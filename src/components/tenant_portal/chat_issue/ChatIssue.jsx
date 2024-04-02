import React from 'react'

import React, { useState } from 'react';

const ChatIssue = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: inputMessage, sender: 'tenant' })
      });
      if (response.ok) {
        setMessages([...messages, { text: inputMessage, sender: 'tenant' }]);
        setInputMessage('');
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Chat with Us to Describe Your Issue</h2>
      <div className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={message.sender === 'tenant' ? 'tenant-message' : 'staff-message'}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message here"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatIssue;

