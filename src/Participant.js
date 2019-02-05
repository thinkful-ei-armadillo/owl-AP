import React from 'react';

export default function Participant(props) {
  let statusHTML = props.inSession
    ? props.onStage
      ? 'on stage'
      : 'in session'
    : 'left session';
  return (
    <li className="session-participant">
      <img src={props.avatar} alt={`participant of {altText}`} />
      <div className="participant-info">
        <h6>{props.name}</h6>
        <div className="participant-status">{statusHTML};</div>
      </div>
    </li>
  );
}
