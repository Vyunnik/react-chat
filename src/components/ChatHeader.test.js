/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import ChatHeader from './ChatHeader';

const firstMockProps = {
  activeUser: {
    isMember: true,
    isCreator: false,
    isChatMember: true,
  },
  activeChat: {
    _id: '987654321',
    title: 'Any chat',
  },
  messages: [
    {
      chatId: '54321',
      content: 'Hello World',
      sender: {},
      createdAt: '2018-25-03',
    },
  ],
  isConnected: true,
  logout: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
};

const secondMockProps = {
  activeUser: {
    isMember: true,
    isCreator: true,
    isChatMember: true,
  },
  activeChat: {
    _id: '123456789',
    title: 'Any chat',
  },
  messages: [
    {
      chatId: '54321',
      content: 'Hello World',
      sender: {},
      createdAt: '2018-24-03',
    },
  ],
  isConnected: true,
  logout: jest.fn(),
  leaveChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
};

const jestTest = (mockProps) => {
  describe('<ChatHeader />', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<ChatHeader {...mockProps} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatHeader {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
};

jestTest(firstMockProps);
jestTest(secondMockProps);
