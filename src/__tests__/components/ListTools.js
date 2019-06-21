import { expect } from 'chai';
import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import ListTools from '../../components/ListTools';

const mockStore = createStore();

const INITIAL_STATE = {
  todos: { data: ['Lista 01', 'React'] },
};

const store = mockStore(INITIAL_STATE);

it('Should render the list', () => {
  const wrapper = mount(
    <Provider store={store}>
      <ListTools />
    </Provider>,
  );

  expect(wrapper.find('li').length).toBe(2);
});
