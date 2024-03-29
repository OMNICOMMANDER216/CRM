import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme/build';
import ButtonGroups from './ButtonGroups';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonGroups />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('toggle click without crashing', () => {
  const wrapper = mount(<ButtonGroups />);
  for (let i = 0; i < 2; i++) {
    const ButtonGroup = wrapper.find('button.dropdown-toggle').at(i);
    ButtonGroup.simulate('click');
    expect(wrapper.state().dropdownOpen[i]).toEqual(true);
  }
  wrapper.unmount();
});
