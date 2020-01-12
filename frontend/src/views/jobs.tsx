import React from 'react';
import { Headline } from '../components/headline';
import { Job } from '../components/job';


export const Jobs = () => {
    return (
        <div id="jobs-wrapper">
            <Headline value="What I’ve done."></Headline>
            <div id="jobs-content">
                <Job title="Junior Web Developer" host="Campusjäger GmbH" startDate="2017"></Job>
                <Job title="Training - IT Specialist for Game & Multimedia Development" host="SRH Fachhochschule" startDate="2015" endDate="2017"></Job>
                <Job title="College-qualifying secondary-school diploma - Business informatics" host="Julius-Springer-Schule - Heidelberg" startDate="2013" endDate="2015"></Job>
            </div>
        </div>
    )
}