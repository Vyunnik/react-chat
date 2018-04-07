export default {
  API_URI:
    process.env.NODE_ENV === 'production'
      ? 'https://dogecodes-chat-api.herokuapp.com/v1'
      : 'http://localhost:8000/v1',
  SOCKETS_URI:
    process.env.NODE_ENV === 'production'
      ? 'wss://https://dogecodes-chat-api.herokuapp.com'
      : 'ws://localhost:8000/',
};
