import React from 'react';

import twitter from './../img/twitter.svg';
import linkedIn from './../img/linkedIn.svg';
import gitHub from './../img/gitHub.svg';
import { Headline } from '../components/headline';

export const Contact = () => {
    return (
        <>
            <Headline value="Contact me."/>
            <div id="contact-wrapper">
                <div id="contact-icons">
                    <div className="contact-icon-box">
                        <a target="_blank" href="https://twitter.com/HaveMirko"><img src={twitter} className="contact-icon"></img></a>
                        <label className="sub-label">@HaveMirko</label>
                    </div>
                    <div className="contact-icon-box">
                        <a target="_blank" href="https://www.linkedin.com/in/mirko-tom-have-b79458132/"><img src={linkedIn} className="contact-icon"></img></a>
                        <label className="sub-label">Mirko tom-Have</label>
                    </div>
                    <div className="contact-icon-box">
                        <a target="_blank" href="https://github.com/tomhave97"><img src={gitHub} className="contact-icon"></img></a>
                        <label className="sub-label">tomhave97</label>
                    </div>
                </div>
                <div id="contact-text">
                    <div id="contact-left-text">
                        <div><div className="sub-text">Contact me via</div> email</div>
                        <div><div className="sub-text">or give me a</div> call</div>
                    </div>
                    <div className="seperator"></div>
                    <div id="contact-right-text">
                        <div>mirko.tomhave@web.de</div>
                        <div>+49 176 976 11 681</div>
                    </div>
                </div>
            </div>
        </>
    )
}