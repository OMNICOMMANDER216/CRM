import React from 'react';
import ReactDOM from 'react-dom';
import {MemoryRouter, Route} from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';
import { Provider } from 'react-redux';
import configureStore from '../../../store/store';

const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter>
    <Provider 
      store={store}>
        <Route path="/" name="Home" component={DefaultLayout} />
    </Provider>
    </MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
