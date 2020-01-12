import React from 'react';

interface JobProps {
    title: String;
    host: String;
    startDate: String;
    endDate?: String;
}

export const Job = ({title, host, startDate, endDate}:JobProps) => {
    return (
        <div className="job-wrapper">
            <div className="job-firstrow">
                <div className="job-title"> {title} </div>
                <div className="job-range"> {startDate} - {endDate ?? 'present'}</div>
            </div>
            <div className="job-secondrow">
                <div className="job-host"> {host}</div> 
            </div>
        </div>
    )
}