import React, { Component } from 'react';
import './App.css';

import Header from './components/common/Header';
import Main from './components/common/Main';
import Footer from './components/common/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;