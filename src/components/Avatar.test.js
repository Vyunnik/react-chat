/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Avatar';

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Avatar colorFrom="pink">Fullname</Avatar>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
