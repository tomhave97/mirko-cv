import React from 'react';
import { Headline } from '../components/headline';

import mirko from '../img/mirko-side.svg'

export const About = () => {
    return (
        <div id="about-wrapper">
            <Headline value="About me."></Headline>
            <div id="about-content">
                <div id="about-text">  
                    <p id="initial-text">I love creative work.</p>
                    <p>Producing music was one of the best things I started. Music is my second big passion.</p>
                    <p>Of course Coding is a big part of my life. I’ve started coding in 2013, with small HTML, PHP and small Java applications.</p>
                    <div><a target="_blank" href="https://github.com/tomhave97" className="sub-link">Check out my gitHub.</a></div>
                    <p>I also play video games, but since I got my girlfriend, I've reduced it. She creates great UX copy</p>
                    <div><a href="#" className="sub-link">Check her out. </a></div>
                </div>
                <div id="about-picture">
                    <img src={mirko}></img>
                </div>
            </div>
        </div>
    )
}