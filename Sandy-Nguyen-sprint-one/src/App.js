import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import VideoDetails from './components/VideoDetails/VideoDetails';
import NextVideoQueue from './components/NextVideoQueue/NextVideoQueue';
import CommentsSection from './components/CommentsSection/CommentsSection';

function App() {
  return (
    <div className="App">   
        <section className="header">
          <Header />
        </section>   
        <HeroVideo />
        <section className="main-section">
          <VideoDetails />
          <CommentsSection />
        </section>
        <section className="sub-section">
          <NextVideoQueue />
        </section>
    </div>
  );
}

export default App;
