import React, { ReactElement, useState } from 'react';
import './Note.scss';

const Note = (): ReactElement => {
  const [isDone, setIsDone] = useState<boolean>(false);

  const inputClass = isDone ? 'done' : 'active';

  const onHanderClick = (): void => {
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
