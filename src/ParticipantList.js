import React from 'react';
import Participant from './Participant';
import './ParticipantList.css';

export default function ParticipantList(props) {
  const participants = props.participants;
  let participantsJSX = [];

  let generateParticipant = function(element) {
    const status = element.onStage
      ? 'stage'
      : element.inSession
      ? 'session'
      : 'left';
    return (
      <Participant
        key={element.id}
        name={element.name}
        avatar={element.avatar}
        status={status}
      />
    );
  };

  participants
    .filter(element => element.inSession)
    .forEach(element => {
      participantsJSX.push(generateParticipant(element));
    });
  participants
    .filter(element => !element.inSession)
    .forEach(element => {
      participantsJSX.push(generateParticipant(element));
    });

  return <ul>{participantsJSX}</ul>;
}
