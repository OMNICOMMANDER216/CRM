import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import User from './User';
import configureStore from '../../store/store';

const store = configureStore();


it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <User match={{
          params: { id: '5c65cd14df79630631beac35' }, isExact: true, path: '/users/:id', name: 'User details',
        }}
        />
      </Provider>
    </MemoryRouter>,
  );
  expect(wrapper.containsMatchingElement(<td>Name</td>)).toEqual(true);
  wrapper.unmount();
});
