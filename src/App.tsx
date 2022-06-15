import React from 'react';
import List from './components/List/List';
import './App.scss';

function App() {
  return (
    <div className="container">
      <div className="header">
        <p className="header__title">TODOS</p>
      </div>
      <List />
    </div>
  );
}

export default App;
