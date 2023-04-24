import React, { Component } from 'react';
import Routes from './routes';
import './App.css'
import MenuScreen from './screens/MenuScreen';
import Footer from './screens/Footer';
class App extends Component {
  render() {
    return (
      <div className="App" style={{position:'relative'} }>
        <Routes />
        <MenuScreen />
        <Footer/>
      </div>
    );
  }
}

export default App;
