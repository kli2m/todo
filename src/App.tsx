import React, { ReactElement } from 'react';
import { List } from 'components';
import './App.scss';

function App(): ReactElement {
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
