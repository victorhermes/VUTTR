import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';

import ListTools from '../../components/ListTools';

const mockStore = createStore();

const INITIAL_STATE = {
  tools: {
    data: [
      {
        title: 'eslint-plugin-react',
        link: 'https://github.com/yannickcr/eslint-plugin-react',
        description: 'React specific linting rules for ESLint ',
        id: 1,
        tags: [
          {
            label: 'plugin',
            value: 'plugin',
          },
          {
            label: 'wow',
            value: 'wow',
          },
        ],
      },
    ],
  },
};

const store = mockStore(INITIAL_STATE);

it('Should render the list', () => {
  const wrapper = mount(
    <Provider store={store}>
      <ListTools />
    </Provider>,
  );

  expect(wrapper.find('h1').exists()).toBe(true);
});
