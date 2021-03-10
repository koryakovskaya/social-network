import React from 'react';
import './App.css';
import Header from './components/Header'
import Navigation from './components/Navigation';
import Profile from './components/Profile';

const App = () => {
  return (
    <div className='app_wrapper'>
      <Header />
      <div className = 'content_wrapper'>
        <Navigation />
        <Profile />
      </div>
    </div>
  );
}

export default App;
