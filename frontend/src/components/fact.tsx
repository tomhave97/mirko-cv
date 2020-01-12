import React from 'react';

interface FactProps {
    number: number;
    text: String;
}

export const Fact = ({number, text}:FactProps) => {
    return (
        <div className="fact-wrapper">
            <div className="fact-number"> #{number} </div>
            <div className="fact-text"> {text} </div>
        </div>
    )
}