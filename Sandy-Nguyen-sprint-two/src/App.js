import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails';
import NextVideoQueue from './components/NextVideoQueue/NextVideoQueue';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Upload from './components/Upload/Upload';
import './App.css';

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';

class App extends React.Component {
  state = {
    heroVideoDetails: [],
    commentsList: []
  }

  componentDidMount() {
    axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data, res.data.comments)
      this.setState({
        heroVideoDetails: [res.data],
        commentsList: res.data.comments
      })
    })
    .catch(err => console.log(err));
}

  updateHero = (id) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data, res.data.comments)

      this.setState({
        heroVideoDetails: [res.data],
        commentsList: res.data.comments     
      })
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
              <section className="hero">
                  <HeroVideo heroVideoDetails={this.state.heroVideoDetails}/>
              </section>
              <div className="section-container">
                  <section className="main-section">
                      <HeroVideoDetails heroVideoDetails={this.state.heroVideoDetails}/>
                      <CommentsSection heroVideoComments={this.state.commentsList}/>
                  </section>
                  <section className="side-section">
                    <NextVideoQueue heroVideoDetails={this.state.heroVideoDetails} updateHero={this.updateHero}/>
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



