// ChatPage.jsx

import React from 'react';

function ChatPage() {
  return (
    <div id="chat" className="tabcontent">
      <h2>Chat Page</h2>
      <div id="chat-container">
        <div id="chat-messages">
          <p></p>
          {/* Chat messages will be displayed here */}
        </div>
        <div id="user-input">
          <input type="text" id="message-input" placeholder="Type your message..." />
          <button onClick={() => sendMessage()}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
