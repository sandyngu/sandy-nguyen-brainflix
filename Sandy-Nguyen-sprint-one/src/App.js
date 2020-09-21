import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/VideoDetails/VideoDetails';
import NextVideoQueue from './components/NextVideo/NextVideo';
import CommentsSection from './components/CommentsSection/CommentsSection';

function App() {
  return (
    <div className="App">   
        <section className="header">
            <Header />
        </section>   
        <HeroVideo />
        <div className="section-container">
            <section className="main-section">
              <HeroVideoDetails />
              <CommentsSection />
            </section>
            <section className="side-section">
              <NextVideoQueue />
            </section>
        </div>
    </div>
  );
}

export default App;
