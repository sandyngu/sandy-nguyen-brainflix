import React from 'react';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/VideoDetails/VideoDetails';
import NextVideoQueue from './components/NextVideo/NextVideo';
import CommentsSection from './components/CommentsSection/CommentsSection';
import './App.css';

class App extends React.Component {
  render() {
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
}

export default App;

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';



