import React, { ReactElement, useRef, useState } from 'react';
import './Input.scss';

interface InputType {
  saveNote: (text: string) => void;
}

const Input: React.FC<InputType> = (props): ReactElement => {
  const { saveNote } = props;

  const [text, setText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const onHandlerSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputRef.current !== null && inputRef.current.value !== '') {
      saveNote(text);
      inputRef.current.value = '';
    }
  };

  const onHandlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className="input">
      <div className="input__icon-block">
        <div className="input__icon-block_icon"></div>
      </div>
      <form onSubmit={onHandlerSubmit}>
        <input
          className="input__search"
          ref={inputRef}
          type="search"
          onChange={onHandlerChangeInput}
          placeholder="What needs to be done?"
        ></input>
      </form>
    </div>
  );
};
export default Input;
