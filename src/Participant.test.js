import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from './Participant';
import store from './store';

describe('Participant component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
      <Participant
        key={1}
        name="Ronnie"
        avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'"
        status="stage"
      />,
      div
    );

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <Participant
          key={1}
          name="Ronnie"
          avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'"
          status="stage"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
