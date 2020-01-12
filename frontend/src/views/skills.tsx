import React from 'react';
import { Headline } from '../components/headline';
import { SkillList } from '../components/skilllist'

import php from './../img/Icon - PHP.svg';
import javascript from './../img/Icon - JavaScript.svg';
import git from './../img/Icon - Git.svg';
import npm from './../img/Icon - NPM.svg';
import teamwork from './../img/Icon - Teamwork.svg';

import cakePHP from './../img/Icon - CakePHP.svg';
import docker from './../img/Icon - Docker.svg';
import gitLab from './../img/Icon - Gitlab.svg';
import laravel from './../img/Icon - Laravel.svg';

import more from './../img/Icon - more....svg';
import mySQL from './../img/Icon - MySQL.svg';
import react from './../img/Icon - React.svg';
import typeScript from './../img/Icon - TypeScript.svg';
import unity from './../img/Icon - Unity.svg';

export const Skills = () => {
    return (
        <div id="skills-wrapper">
            <Headline value="Skills I’ve learned." subHeading="Contrary to expectations I have not only learned technical stuff."></Headline>
            <SkillList>
                <div className="skill-group">
                    <img src={php}></img>
                    <img src={javascript}></img>
                    <img src={git}></img>
                    <img src={npm}></img>
                    <img src={teamwork}></img>
                </div>
                <div className="skill-group">
                    <img src={cakePHP}></img>
                    <img src={typeScript}></img>
                    <img src={gitLab}></img>
                    <img src={mySQL}></img>
                    <img src={unity}></img>
                </div>
                <div className="skill-group">
                    <img src={laravel}></img>
                    <img src={react}></img>
                    <img src={docker}></img>
                    <img src={more}></img>
                </div>
            </SkillList>
        </div>
    )
}