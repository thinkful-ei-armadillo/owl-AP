import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import StageParticipant from './StageParticipant';


describe('Participant component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(
      <StageParticipant
      key={1} 
      name="Ronnie" 
      avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'"
      self={false}
      />,
      div
    );

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(
        <StageParticipant
        key={1} 
        name="Ronnie" 
        avatar="https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'"
        self={false}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
