import React from 'react';
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroVideoDetails from './components/HeroVideoDetails/HeroVideoDetails';
import NextVideoQueue from './components/NextVideoQueue/NextVideoQueue';
import CommentsSection from './components/CommentsSection/CommentsSection';
import Upload from './components/Upload/Upload';
import UpdatedPage from './components/UpdatedPage/UpdatedPage'
import './App.css';

const API_KEY = '110f950a-c58f-42c6-969e-3e58a775af61';

class App extends React.Component {

  state = {
    heroVideoDetails: [],
    commentsList: [],
    nextVideoList: []
  };

  componentDidMount() {
    // axios.get(`https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`)
    // .then(res => {
    //   console.log(res.data, res.data.comments)
    //   this.setState({
    //     heroVideoDetails: [res.data],
    //     commentsList: res.data.comments
    //   });
    // })
    // .catch(err => console.log(err));

  let URL1 = `https://project-2-api.herokuapp.com/videos/1af0jruup5gu/?api_key=${API_KEY}`;
  let URL2 = `https://project-2-api.herokuapp.com/videos/?api_key=${API_KEY}`;

  const requestOne = axios.get(URL1);
  const requestTwo = axios.get(URL2);

  axios
    .all([requestOne, requestTwo])
    .then(
      axios.spread((...res) => {
        const responseOne = res[0];
        const responseTwo = res[1];

        this.setState({
            heroVideoDetails: [res[0].data],
            commentsList: res[0].data.comments,
            nextVideoList: res[1].data
        });
        console.log(responseOne, responseTwo);  
      })
    )
    .catch(err => {
      console.error(err);
    });
  }

  updateHero = (id) => {
    axios.get(`https://project-2-api.herokuapp.com/videos/${id}/?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data, res.data.comments)

      this.setState({
        heroVideoDetails: [res.data],
        commentsList: res.data.comments,  
      })
    })
    .catch(err => console.log(err));
  }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     console.log("prevProps", prevProps);
  //     console.log("props", this.props);
  //     this.updateHero(this.props.match.params.id);
  //   }
  // }

  render() {
    return (
      <Switch>
          <Route path='/' exact>
          <div className="App">       
              <Header />
              <HeroVideo heroVideoDetails={this.state.heroVideoDetails}/>
              <div className="section-container">
                  <section className="main-section">
                      <HeroVideoDetails heroVideoDetails={this.state.heroVideoDetails}/>
                      <CommentsSection heroVideoComments={this.state.commentsList}/>
                  </section>
                    <NextVideoQueue heroVideoDetails={this.state.heroVideoDetails} nextVideoList={this.state.nextVideoList} updateHero={this.updateHero} />
              </div>
          </div>
          </Route>
          <Route path='/video/:id' render={() => <UpdatedPage state={this.state}/>}/>
          <Route path='/upload' component={Upload}/>
      </Switch>
    );
  }
}

export default App;
