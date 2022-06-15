import React, { useState } from 'react';
import './Note.scss';

const Note = () => {
  const [isDone, setIsDone] = useState(false);

  const inputClass = isDone ? 'done' : 'active';

  const onHanderClick = () => {
    setIsDone(!isDone);
  };

  return (
    <div className="note" onClick={onHanderClick}>
      <div className="note__icon-block">
        {isDone && <div className="note__icon-block_icon"></div>}
      </div>
      <p className={`note__text ${inputClass}`}>text p</p>
    </div>
  );
};

export default Note;
