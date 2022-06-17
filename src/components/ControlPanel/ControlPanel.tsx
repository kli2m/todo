import React, { ReactElement } from 'react';
import { Todo } from 'interfaces/Todo';
import './ControlPanel.scss';

interface ControlPanelType {
  notes: Todo[];
  toggle: string;
  handlerChangeToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ControlPanel: React.FC<ControlPanelType> = (props): ReactElement => {
  const { notes, toggle, handlerChangeToggle } = props;
  return (
    <div className="control">
      <div className="control__info-mess">
        <span>{notes.length} items left</span>
      </div>
      <div className="control__sort-box">
        <div className="control__sort-box_item all">
          <input
            type="radio"
            value="All"
            id="all"
            name="sort"
            checked={toggle === 'All'}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handlerChangeToggle(event)}
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handlerChangeToggle(event)}
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
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => handlerChangeToggle(event)}
          ></input>
          <label htmlFor="completed">Completed</label>
        </div>
      </div>
      <div className="control__clear">
        <button className="control__clear_btn" >Clear completed</button>
      </div>
    </div>
  );
};

export default ControlPanel;
