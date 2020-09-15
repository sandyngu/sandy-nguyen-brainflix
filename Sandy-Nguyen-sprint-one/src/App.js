import React from 'react';
// import Logo from '../assets/logo/Logo-brainflix.svg';
import './App.css';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDetails from './components/VideoDetails/VideoDetails'

function App() {
  return (
    <div className="App">      
        {/* <img src={Logo} className="App-logo" alt="logo" /> */}
        <Header />
        <Video />
        <VideoDetails />
    </div>
  );
}

export default App;
