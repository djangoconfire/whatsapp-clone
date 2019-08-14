import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import ChatListScreen from './components/ChatListScreen'

class App extends Component {
  render() {
    return (
      <div>
        <ChatListScreen />
      </div>
    );
  }
}

export default App;
