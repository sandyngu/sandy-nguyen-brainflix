import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Video from './components/Video/Video';
import VideoDetails from './components/VideoDetails/VideoDetails';
import NextVideoQueue from './components/NextVideoQueue/NextVideoQueue';
import CommentsSection from './components/CommentsSection/CommentsSection';

function App() {
  return (
    <div className="App">      
        <Header />
        <section className="main__video">
          <Video />
          <VideoDetails />
        </section>
        <CommentsSection />
        <NextVideoQueue />

    </div>
  );
}

export default App;
