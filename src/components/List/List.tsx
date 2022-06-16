import React, { ReactElement } from 'react';
import { Input, Note, ControlPanel } from 'components';

import './List.scss';

const List = (): ReactElement => (
  <div className="list">
    <Input></Input>
    <div className="list__items">
      <Note></Note>
      <Note></Note>
      <Note></Note>
    </div>
    <ControlPanel></ControlPanel>
  </div>
);

export default List;
