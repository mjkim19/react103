import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header';
import Main from './components/main/main';
import Section from './components/section/section';

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Main></Main>
        <Section></Section>
      </div>
    );
  }
}

export default App;