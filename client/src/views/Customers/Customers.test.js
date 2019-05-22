import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import CustomerRow from './CustomerRow';
import CustomerModel from './CustomerModel';

it('renders without crashing', () => {
  const div = document.createElement('tbody');
  ReactDOM.render(<MemoryRouter><CustomerRow customer={CustomerModel} /></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
