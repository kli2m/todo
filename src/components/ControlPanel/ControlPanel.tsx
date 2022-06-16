import React, { ReactElement, useState } from 'react';
import './ControlPanel.scss';

const ControlPanel = (): ReactElement => {
  const [toggle, setToggle] = useState<string>('All');

  const handleChangeToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToggle(event.target.value);
  };

  return (
    <div className="control">
      <div className="control__info-mess">
        <span>2 items left</span>
      </div>
      <div className="control__sort-box">
        <div className="control__sort-box_item all">
          <input
            type="radio"
            value="All"
            id="all"
            name="sort"
            checked={toggle === 'All'}
            onChange={handleChangeToggle}
          ></input>
          <label htmlFor="all">All</label>
        </div>
        <div className="control__sort-box_item active">
          <input
            type="radio"
            value="Active"
            id="active"
            name="sort"
            checked={toggle === 'Active'}
            onChange={handleChangeToggle}
          ></input>
          <label htmlFor="active">Active</label>
        </div>
        <div className="control__sort-box_item completed">
          <input
            type="radio"
            value="Completed"
            id="completed"
            name="sort"
            checked={toggle === 'Completed'}
            onChange={handleChangeToggle}
          ></input>
          <label htmlFor="completed">Completed</label>
        </div>
      </div>
      <div className="control__clear">
        <button className="control__clear_btn">Clear completed</button>
      </div>
    </div>
  );
};

export default ControlPanel;
