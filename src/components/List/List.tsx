import React, { ReactElement, useState } from 'react';
import { Input, ControlPanel, Note } from 'components';
import { Todo } from 'interfaces/Todo';
import './List.scss';

const List = (): ReactElement => {
  const [notes, setNotes] = useState<Todo[]>([]);
  const [toggle, setToggle] = useState<string>('All');

  const saveNote = (text: string): void => {
    const newNote = { text, isFinished: false };
    setNotes(notes.concat(newNote));
  };

  const onHandlerClickByNote = (index: number, isFinished: boolean): void => {
    const newNotes = notes.map((note, i) => {
      if (i === index) {
        return { ...note, isFinished: !isFinished };
      }
      return note;
    });
    setNotes(newNotes);
  };

  const handlerChangeToggle = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setToggle(event.target.value);
  };
  const handlerClickClear = (): void => {
    setNotes(notes.filter((note) => !note.isFinished));
  };

  const notesLeft = (): number => notes.filter((note) => !note.isFinished).length;

  return (
    <div className="list">
      <Input saveNote={saveNote}></Input>
      <div className="list__items">
        {notes
          .filter((note) => {
            switch (toggle) {
              case 'All': {
                return true;
              }
              case 'Active': {
                return !note.isFinished;
              }
              case 'Completed': {
                return note.isFinished;
              }
              default: {
                return true;
              }
            }
          })
          .map(
            (note, index): ReactElement => (
              <Note
                key={`${note} + ${index}`}
                note={note}
                index={index}
                onHandlerClickByNote={onHandlerClickByNote}
              />
            ),
          )}
      </div>
      <ControlPanel
        notesLeft={notesLeft()}
        toggle={toggle}
        handlerChangeToggle={handlerChangeToggle}
        handlerClickClear={handlerClickClear}
      ></ControlPanel>
    </div>
  );
};

export default List;
