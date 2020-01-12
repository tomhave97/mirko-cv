import React from 'react';

import {Home} from './views/home';
import {Jobs} from './views/jobs';
import {Skills} from './views/skills';
import {About} from './views/about';
import {Facts} from './views/facts';
import {Navigation} from './views/navigation';

import {Block} from './components/page-block';
import './App.css';
import { Contact } from './views/contact';

const App: React.FC = () => {
  return (
    <div id="main-wrapper">
        <Navigation/>
      <div id="content-wrapper">
        <Block><Home/></Block>
        <Block><Jobs/></Block>
        <Block><Skills/></Block>
        <Block><About/></Block>
        <Block><Facts/></Block>
        <Block><Contact/></Block>
      </div>
    </div>
  );
}

export default App;
