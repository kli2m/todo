import React from 'react';
import './ControlPanel.scss';

const ControlPanel = () => (
  <div className="control">
    <div className="control__info-mess">
      <span>2 items left</span>
    </div>
    <div className="control__sort-box">
      <div className="control__sort-box_item all">
        <input type="radio" value="All" id="all" name="sort"></input>
        <label htmlFor="all">All</label>
      </div>
      <div className="control__sort-box_item active">
        <input type="radio" value="Active" id="active" name="sort"></input>
        <label htmlFor="active">Active</label>
      </div>
      <div className="control__sort-box_item completed">
        <input type="radio" value="Completed" id="completed" name="sort"></input>
        <label htmlFor="completed">Completed</label>
      </div>
    </div>
    <div className="control__clear">
      <button>Clear completed</button>
    </div>
  </div>
);

export default ControlPanel;
