import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails';
import NextVideoQueue from './components/NextVideo/NextVideo';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Upload from './components/Upload/Upload';
import './App.css';

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';
let videosURL = 'https://project-2-api.herokuapp.com/videos?api_key=API_KEY';
let videosURL2 = 'https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=API_KEY';

class App extends React.Component {
  state = {
    videoList: [],
    heroVideo: []
  }

  componentDidMount() {
    axios.get(videosURL)
        .then(res => {
          console.log(res.data)
          this.setState({
            videoList: res.data})
          })
        .catch(err => console.log(err));
  }

  render() {
    return (
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
                      <NextVideoQueue videoList={this.state.videoList}/>
                    </section>
                </div>
            </div>
          </Route>
          <Route path='/upload' component={Upload}/>
        </Switch>
    );
  }
}

export default App;



