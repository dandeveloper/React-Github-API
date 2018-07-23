import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ReposList from './components/ReposList/ReposList';
import './App.css';


class App extends Component {

  render() {
    return (
      <div id="app">
        <Header />
        <ReposList />
      </div>
    );
  }
}

export default App;
