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
        <Header />
        <section className="main">
          <HeroVideo />
          <VideoDetails />
        </section>
        <section className="main__comments">
          <CommentsSection />
        </section>
        <NextVideoQueue />

    </div>
  );
}

export default App;
