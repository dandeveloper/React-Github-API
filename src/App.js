import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ReposList from './components/ReposList/ReposList';
import RepoDetails from './components/RepoDetails/RepoDetails';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className="app">
        <Header />
        <BrowserRouter>
          <Route path="/" component={ ReposList } />
        </BrowserRouter>
        <BrowserRouter>
          <Route path="/" exact component={ RepoDetails } />
        </BrowserRouter>
        <BrowserRouter>
            <Route path="/:repo" component={ RepoDetails } />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
