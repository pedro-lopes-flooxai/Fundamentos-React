import "./Card.css";
import React from "react";

export default (props) => {

    const cardStyle = {

        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',

    }

    return (
        <div className="Card" style={{ 
            backgroundColor: props.color || '#F00',
            borderColor: props.color || '#00',
            
        }}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">
                {props.children}
            </div>
         </div>
    );
};