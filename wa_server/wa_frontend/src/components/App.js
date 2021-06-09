import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import '../index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div id="container">
        <Header />
       
        <MainContent />
       
        <Footer />
      </div>
    );
  }
}

export default App;