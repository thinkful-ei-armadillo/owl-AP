import React from 'react';
import Participant from './Participant';

export default function ParticipantList(props) {
  const participants = props.participants;
  let participantsHTML = [];

  participants
    .filter(element => element.inSession)
    .forEach(element => {
      debugger;
      participantsHTML.push(
        <Participant
          key={element.id}
          name={element.name}
          avatar={element.avatar}
          inSession={true}
        />
      );
    });
  participants
    .filter(element => !element.inSession)
    .forEach(element => {
      participantsHTML.push(
        <Participant
          key={element.id}
          name={element.name}
          avatar={element.avatar}
          inSession={false}
        />
      );
    });
  return <ul>{participantsHTML}</ul>;
}
