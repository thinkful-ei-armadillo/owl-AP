import React from 'react';
import './ChatItem.css';

export default function ChatItem(props) {
  let itemHTML;
  let type = props.type;
  if (type === 'message') {
    itemHTML = (
      <li className="session-participant">
        <img src={props.user.avatar} alt="user img" />
        <div className="participant-info">
          <h6>{props.user.name}</h6>
          <div className="chat-message">{props.message}</div>
        </div>
      </li>
    );
  } else {
    let msg = `${props.user.name}`;
    if (type === 'thumbs-up') {
      msg += ' gave a thumbs up';
    } else if (type === 'thumbs-down') {
      msg += ' gave a thumbs down';
    } else if (type === 'raise-hand') {
      msg += ' raises their hand';
    } else if (type === 'clap') {
      msg += ' claps';
    } else if (type === 'join') {
      msg += ' joins';
    } else if (type === 'join-stage') {
      msg += ' joins the stage';
    } else if (type === 'leave') {
      msg += ' leave';
    } else if (type === 'leave-stage') {
      msg += ' leaves the stage';
    }

    itemHTML = (
      <li className="session-participant">
        <div className="participant-info">
          <div className="chat-message">{msg}</div>
        </div>
      </li>
    );
  }

  return itemHTML;
}
