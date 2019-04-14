import React, { Component } from 'react';
import './App.css';

import Routes from './routes';

// Para o react entender que é um componente, precisa extender
// a classe Component
// Todo componente obrigatoriamente tem que ter o método render
class App extends Component {
  render() {
    return (
      <Routes/>
    );
  }
}

export default App;
