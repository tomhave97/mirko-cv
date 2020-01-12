import React from 'react';

import twitter from './../img/twitter.svg';
import linkedIn from './../img/linkedIn.svg';
import gitHub from './../img/gitHub.svg';

export const Navigation = () => {
    return (
        <div id="navigation-wrapper">
            <div id="icon-wrapper">
                <div className="nav-icon-box">
                    <a target="_blank" href="https://twitter.com/HaveMirko"><img src={twitter} className="nav-icon"></img></a>
                    <label className="sub-label">@HaveMirko</label>
                </div>
                <div className="nav-icon-box">
                    <a target="_blank" href="https://www.linkedin.com/in/mirko-tom-have-b79458132/"><img src={linkedIn} className="nav-icon"></img></a>
                    <label className="sub-label">Mirko tom-Have</label>
                </div>
                <div className="nav-icon-box">
                    <a target="_blank" href="https://github.com/tomhave97"><img src={gitHub} className="nav-icon"></img></a>
                    <label className="sub-label">tomhave97</label>
                </div>
            </div>
        </div>
    )
}