import React from 'react';
import mirko from './../img/mirko_profile_picture.svg';
import arrowDown from './../img/arrow-down.svg';

export const Home = () => {
    return (
        <div id="home-wrapper">
            <div id="top-home-wrapper">
                <div id="picture-wrapper">
                <img src={mirko} id="mirko-main-picute"></img>
                    <div id="red-rectangle"></div>
                    <div id="green-rectangle"></div>
                    <div id="blue-rectangle"></div>
                </div>
                <div id="headline-wrapper">
                <h1>Hey. <br/> I'm Mirko.</h1>
                <h2>Fascinated by new things, overwhelmed by old things and convinced of existing.</h2>
                </div>
            </div>
            <div id="arrow-wrapper">
                <div><img src={arrowDown} style={{height: 120, width: 120}}></img></div>
            </div>
        </div>
    )
}