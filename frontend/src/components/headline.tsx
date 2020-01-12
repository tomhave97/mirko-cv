import React from 'react';

interface HeadlineProps {
    value: String;
    subHeading?: String;
}

const getFirstWord = (value: String) => (
    value.split(" ")[0]
);

const extractFirstWord = (value: String) => (
    // Split into an array slice the first word out and join back to String.
    value.split(" ").splice(1, value.length).join(" ")
)

export const Headline = ({value, subHeading}:HeadlineProps ) => (
    <div className="page-headline">
        <h4>{getFirstWord(value)}</h4>
        <h5>{extractFirstWord(value)}</h5>
        <h6> {subHeading} </h6>
    </div>
)
