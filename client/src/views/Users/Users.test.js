import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Users from './Users';
import { Provider } from 'react-redux';
import configureStore from '../../store/store';

const store = configureStore();


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Provider store={store}><Users /></Provider></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
