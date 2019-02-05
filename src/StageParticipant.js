import React from 'react';
import './StageParticipant.css'

export default function StageParticipant(props){
    let classes = (props.self ? "stage-participant-self" : "stage-participant");
 
    return (
        <div className={classes}>
            <div className="info-status">
                {props.name}
            </div>
            <img src={props.avatar} alt={props.name}/>
        </div>
    );
}