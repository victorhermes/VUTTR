import { mount } from 'enzyme';
import React from 'react';

import Test from '../../Opps';

it('should renders hello world', () => {
  const wrapper = mount(<Test />);

  expect(wrapper.find('h1').exists()).toBe(true);
});
