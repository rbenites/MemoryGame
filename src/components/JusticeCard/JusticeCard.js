import React from "react";
import "./JusticeCard.css";

const JusticeCard = props => (

    <div className="img-container">
        <img alt={props.name} src={props.image} onClick={() => props.shufflemembers(props.id)} />
    </div>
);

export default JusticeCard;