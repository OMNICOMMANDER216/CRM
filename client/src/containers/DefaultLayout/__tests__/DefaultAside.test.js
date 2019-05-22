import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import DefaultAside from '../DefaultAside';
import configureStore from '../../../store/store';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><DefaultAside /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
