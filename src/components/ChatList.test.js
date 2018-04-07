/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import ChatList from './ChatList';

jest.mock('./ChatListItem', () => ({ chatId }) => `ChatListItem-${chatId}`);

const mockProps = {
  chats: [
    {
      _id: '123456789',
      title: 'First Chat',
      createdAt: '2018-03-25',
    },
    {
      _id: '98745',
      title: 'Second chat',
      createdAt: '2018-03-23',
    },
    {
      _id: '1234',
      title: 'Third chat',
      createdAt: '2018-03-23',
    },
  ],
  activeChat: {
    _id: '123456789',
  },
  disabled: false,
};

describe('<ChatList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatList {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
