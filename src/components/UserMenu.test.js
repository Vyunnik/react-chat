/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import UserMenu from './UserMenu';

const firstMockProps = {
  activeUser: {
    firstName: 'Firstname',
    lastName: 'Lstname',
    username: 'Login',
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  disabled: false,
  onEditProfileClick: jest.fn(),
  onLogoutClick: jest.fn(),
};

const secondMockProps = {
  activeUser: {
    firstName: 'Firstname',
    lastName: 'Lstname',
    username: 'Login',
    isMember: true,
    isCreator: false,
    isChatMember: true,
  },
  disabled: false,
  onEditProfileClick: jest.fn(),
  onLogoutClick: jest.fn(),
};

const jestTest = (mockProps) => {
  describe('<UserMenu />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<UserMenu {...mockProps} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
};

jestTest(firstMockProps);
jestTest(secondMockProps);
