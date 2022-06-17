import React, { ReactElement, useState } from 'react';
import { Todo } from 'interfaces/Todo';
import './Note.scss';

interface NoteType {
  note: Todo;
  index: number;
  onHandlerClickByNote: (index: number, isFinished: boolean) => void;
}

const Note: React.FC<NoteType> = (props): ReactElement => {
  const { index, onHandlerClickByNote, note } = props;
  // const { text, isFinished } = note;

  const [isDone, setIsDone] = useState<boolean>(note.isFinished);

  const inputClass: string = note.isFinished ? 'done' : 'active';

  const onHanderClick = (): void => {
    setIsDone(!isDone);
    onHandlerClickByNote(index, isDone);
  };

  return (
    <div className="note" onClick={() => onHanderClick()}>
      <div className="note__icon-block">
        {note.isFinished && <div className="note__icon-block_icon"></div>}
      </div>w
      <p className={`note__text ${inputClass}`}>{note.text}</p>
    </div>
  );
};

export default Note;
