import React, { Component } from 'react';
import './App.css';
import ParticipantList from './ParticipantList';
import store from './store';

class App extends Component {
  render() {
    return (
      <div className="sidebar">
        <ParticipantList participants={store.participants} />
      </div>
    );
  }
}

export default App;
