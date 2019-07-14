import { mount, shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'redux-mock-store';
import styled from 'styled-components';

import 'jest-styled-components';
import ListTools from '~/components/ListTools';

const mockStore = createStore();

const Btn = styled.button`
  font-size: 18px;
  color: #31225fa1;
  background: transparent;
  border: 0;
  border-radius: 5px;
  padding: 3px 5px 3px 5px;
  text-transform: uppercase;
`;

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

  const button = shallow(<Btn />);
  expect(wrapper.find('h1').length).toBe(2);
  expect(wrapper.find('p').length).toBe(3);
  expect(button).toMatchSnapshot();
  expect(wrapper.find('button').length).toBe(5);
  expect(wrapper.find('span').length).toBe(6);
});
