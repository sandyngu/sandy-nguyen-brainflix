import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainVideoPage from './components/MainVideoPage/MainVideoPage';
import Upload from './components/Upload/Upload';
import './App.css';

function App() {

    return (
      <div className="App">       
      <Switch>
          <Route path='/' exact component={MainVideoPage} />
          <Route path='/video/:id' component={MainVideoPage} />
          <Route path='/upload' component={Upload} />
      </Switch>
      </div>
    );
}

export default App;
