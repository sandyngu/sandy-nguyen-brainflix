import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainVideoPage from './components/MainVideoPage/MainVideoPage';
import Upload from './components/Upload/Upload';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">       
      <Header />
      <Switch>
          <Route path='/' exact component={MainVideoPage} />
          <Route path='/video/:id' component={MainVideoPage} />
          <Route path='/upload' component={Upload}/>
      </Switch>
      </div>
    );
  }
}

export default App;
