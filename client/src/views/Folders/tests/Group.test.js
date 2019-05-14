import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Group from '../Board/Group/Group';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Group /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});