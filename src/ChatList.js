import React from 'react';
import ChatItem from './ChatItem';
import './ChatList.css';

export default function ChatList(props) {
  function getParticipantObject(id) {
    return props.participants.find(element => element.id === id);
  }
  const chat = props.chatEvents;

  let chatJSX = chat.map((element, index) => {
    debugger;
    const participant = getParticipantObject(element.participantId);

    return (
      <ChatItem
        key={index}
        user={participant}
        type={element.type}
        message={element.message}
        time={element.time}
        timestamp={element.timestamp}
      />
    );
  });

  return <ul>{chatJSX}</ul>;
}
