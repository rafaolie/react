import React, { Component } from 'react';
import './App.css';
import './custom.css'
import Menu from './componentes/menu'
import Routes from './componentes/routes'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default App;
