import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/VideoDetails/VideoDetails';
import NextVideoQueue from './components/NextVideo/NextVideo';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Upload from './components/Upload/Upload';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
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
          </Route>
          <Route path='/upload' component={Upload}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';



