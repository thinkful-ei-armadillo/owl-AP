import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ParticipantList from './ParticipantList';
import store from './store';

describe('ParticipantList component testing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<ParticipantList participants={store.participants} />, div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ParticipantList participants={store.participants} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
