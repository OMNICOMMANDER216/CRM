import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Customer from './Customer';
import configureStore from '../../store/store';

const store = configureStore();

it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Provider store={store}>
        <Customer match={{
          params: { id: '1' }, isExact: true, path: '/customers/:id', name: 'Customer details',
        }}
        />
      </Provider>
    </MemoryRouter>,
  );
  expect(wrapper.containsMatchingElement(<td>Date</td>)).toEqual(true);
  wrapper.unmount();
});
