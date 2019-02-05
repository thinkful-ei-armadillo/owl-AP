import React from 'react';
import './Participant.css';

export default function Participant(props) {
  let classList =
    'participant-status ' +
    (props.status === 'stage' || props.status === 'session'
      ? 'status_green'
      : 'status_grey');
  let statusHTML =
    props.status === 'stage'
      ? 'on stage'
      : props.status === 'session'
      ? 'in session'
      : 'left session';
  return (
    <li className="session-participant">
      <img src={props.avatar} alt={`participant of {altText}`} />
      <div className="participant-info">
        <h6>{props.name}</h6>
        <div className={classList}>{statusHTML};</div>
      </div>
    </li>
  );
}
