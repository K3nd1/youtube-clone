import React from 'react';
import './App.css';
import Header from "./Header";
import RecommendedVideos from './RecommendedVideos';
import SideBar from './SideBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchPage from './SearchPage'

function App() {
  return (
    <div className="App">
      <Router>
          <Header/>

        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app__page">
                <SideBar />
                <SearchPage/>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
                <SideBar />
                <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
