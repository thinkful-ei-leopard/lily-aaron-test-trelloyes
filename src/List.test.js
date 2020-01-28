import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

//smoke test

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <List 
      cards = {[
        {id: 'z',
        title: 'something',
        content: 'lorem ipsum'}
      ]}
      />, 
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

//snapshot test

it('renders UI as expected', () => {
  const tree = renderer.create(
    <List 
      cards = {[
        {id: 'z',
        title: 'something',
        content: 'lorem ipsum'}
      ]}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});