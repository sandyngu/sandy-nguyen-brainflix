import React from 'react';
import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/VideoDetails/VideoDetails';
import NextVideoQueue from './components/NextVideo/NextVideo';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Upload from './components/Upload/Upload';
import './App.css';

let videosURL = 'https://project-2-api.herokuapp.com/videos?api_key=110f950a-c58f-42c6-969e-3e58a775af61';

class App extends React.Component {
  state = {
    videoList: []
  }

  // heroVid = (id) => {
  //   axios.put(`https://project-2-api.herokuapp.com/videos/${id}?api_key=110f950a-c58f-42c6-969e-3e58a775af61`)
  //       .then(res => {
  //         let index = this.state.videoList.findIndex((video) => video.id === id);
          
  //         let updatedList = this.state.videoList;
  //         updatedList.splice(index, 1)

  //         this.setState({
  //             videoList: updatedList
  //         })
  //     })
  //     .catch(err => {
  //         console.log(err)
  //     })
  // }

  componentDidMount() {
    axios.get(videosURL)
        .then(res => {
          console.log(res.data)
          this.setState({
            videoList: res.data})
          });
  }

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
                      <NextVideoQueue videoList={this.state.videoList} />
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

// const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';


