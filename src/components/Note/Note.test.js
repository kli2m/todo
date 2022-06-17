import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Note from './Note';

const testCases = {
  note: { text: 'testOne', isFinished: false },
  index: 1,
  onHandlerClickByNote: () => [index, isFinished],
};

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    render(
      <Note
        note={testCases.note}
        index={testCases.index}
        onHandlerClickByNote={testCases.onHandlerClickByNote}
      />,
      container,
    );
  });
});
