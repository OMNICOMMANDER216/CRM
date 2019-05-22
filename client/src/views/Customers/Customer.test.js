import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Customer from './Customer';
import configureStore from '../../store/store';

const store = configureStore();

it('renders without crashing', () => {
  const wrapper = mount(
    <MemoryRouter>
      <Customer match={{
        params: { id: '1' }, isExact: true, path: '/customers/:id', name: 'Customer details',
      }}
      />
    </MemoryRouter>,
  );
  console.log(wrapper);
  expect(wrapper.containsMatchingElement(<td>Date</td>)).toEqual(true);
  wrapper.unmount();
});
