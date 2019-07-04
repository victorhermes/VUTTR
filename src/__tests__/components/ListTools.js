import { mount } from 'enzyme';
import React from 'react';

import ListTools from '../../components/ListTools';

it('Should render the list', () => {
  const wrapper = mount(<ListTools />);

  expect(wrapper.find('h1').exists()).toBe(true);
});
