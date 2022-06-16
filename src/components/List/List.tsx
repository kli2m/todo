import React, { ReactElement, useState } from 'react';
import { Input, Note, ControlPanel } from 'components';
import { Todo } from 'interfaces/Todo';
import './List.scss';

const List = (): ReactElement => {
  const [notes, setNotes] = useState<Todo[]>([]);

  const saveNote = (text: string): void => {
    const newNote = { text, isFinished: false };
    setNotes(notes.concat(newNote));
  };

  return (
    <div className="list">
      <Input saveNote={saveNote}></Input>
      <div className="list__items">
        {notes.map(
          (note, index): ReactElement => (
            <Note key={`${note} + ${index}`} note={note} />
          ),
        )}
      </div>
      <ControlPanel></ControlPanel>
    </div>
  );
};

export default List;
