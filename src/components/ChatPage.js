import React from 'react';
import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';

import { messages } from '../mock-data';

class ChatPage extends React.Component {
  componentDidMount() {
    const { fetchAllChats, fetchMyChats } = this.props;

    Promise.all([
      fetchAllChats(),
      fetchMyChats(),
    ]);
  }

  render() {
    const { chats } = this.props;

    return (
      <React.Fragment>
        <ChatHeader />
        <Sidebar chats={chats} />
        <Chat messages={messages} />
      </React.Fragment>
    );
  }
};

export default ChatPage;
