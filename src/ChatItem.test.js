import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatItem from './ChatItem';
import store from './store';

describe('Participant component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
      <ChatItem
      key={1}
      user={{name: 'Ronnie', avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}}
      type='message'
      message='hello world'
      time={1548852646559}
      timestamp={1548852646559}
      />,
      div
    );

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <ChatItem
      key={1}
      user={{name: 'Ronnie', avatar: 'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'}}
      type='message'
      message='hello world'
      time={1548852646559}
      timestamp={1548852646559}
      />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
