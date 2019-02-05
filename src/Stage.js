import React from 'react';
import StageParticipant from './StageParticipant';
import './Stage.css'


export default function Stage(props) {
    const stageParticipants = props.participants
        .filter(element => element.onStage)
        .map(element => 
            <StageParticipant 
            key={element.id} 
            name={element.name} 
            avatar={element.avatar}
            self={element.self || false} 
            />
            );

    return (
        <div className="stage-container">
            {stageParticipants}
        </div>
    );
}