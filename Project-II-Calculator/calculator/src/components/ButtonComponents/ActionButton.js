import React from 'react';
import './Button.scss';

const ActionButton = props => {
    return (
        <button className={`big-button ${props.className}`}>{props.text}
        </button>
    );
};

export default ActionButton;