import React, { ReactElement } from 'react';
import './Input.scss';

const Input = (): ReactElement => (
  <div className="input">
    <div className="input__icon-block">
      <div className="input__icon-block_icon"></div>
    </div>
    <input className="input__search" type="search" placeholder="What needs to be done?"></input>
  </div>
);

export default Input;
