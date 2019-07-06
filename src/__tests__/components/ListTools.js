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
            label: 'modal',
            value: 'modal',
          },
          {
            label: 'rodal',
            value: 'rodal',
          },
          {
            label: 'react',
            value: 'react',
          },
        ],
      },
      {
        title: 'yup',
        link: 'https://github.com/yup',
        description: 'Yup is something cool!',
        id: 2,
        tags: [
          {
            label: 'modal',
            value: 'modal',
          },
          {
            label: 'rodal',
            value: 'rodal',
          },
          {
            label: 'react',
            value: 'react',
          },
        ],
      },
    ],
  },
};

const store = mockStore(INITIAL_STATE);

it('Should render the tools', () => {
  const wrapper = mount(
    <Provider store={store}>
      <ListTools />
    </Provider>,
  );

  expect(wrapper.find('h1').length).toBe(2);
});
