import React, { ReactElement, useState } from 'react';
import { Todo } from 'interfaces/Todo';
import './Note.scss';

interface NoteType {
  note: Todo;
}

const Note: React.FC<NoteType> = (props): ReactElement => {
  const { text, isFinished } = props.note;

  const [isDone, setIsDone] = useState<boolean>(isFinished);

  const inputClass = isDone ? 'done' : 'active';

  const onHanderClick = (): void => {
    setIsDone(!isDone);
  };

  return (
    <div className="note" onClick={onHanderClick}>
      <div className="note__icon-block">
        {isDone && <div className="note__icon-block_icon"></div>}
      </div>
      <p className={`note__text ${inputClass}`}>{text}</p>
    </div>
  );
};

export default Note;
