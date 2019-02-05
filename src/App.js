import React, { Component } from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import store from './store';
import Stage from './Stage';
import ChatList from './ChatList';

class App extends Component {
  render() {
    return (
      <div className="session">
        <div className="sidebar">
          <ParticipantList participants={store.participants} />
          <ChatList
            chatEvents={store.chatEvents}
            participants={store.participants}
          />
        </div>
        <div className="stage">
          <Stage participants={store.participants} />
        </div>
      </div>
    );
  }
}

export default App;
