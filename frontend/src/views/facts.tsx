import React from 'react';
import { Headline } from '../components/headline';
import { Fact } from '../components/fact';

export const Facts = () => {
    return (
        <div id="facts-wrapper">
            <Headline value="Fun facts."></Headline>
            <div id="jobs-content">
                <Fact number={1} text="I’m red-green blind."></Fact>
                <Fact number={2} text="I have red hair and green eyes."></Fact>
                <Fact number={3} text="My Favorite Laptop is the Matebook Pro X. Why? Because it’s like an Macbook. But it’s not Apple."></Fact>
            </div>
        </div>
    )
}
