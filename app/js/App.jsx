/*
Author: Or Halimi
Copyright (c) 2017 Or Halimi. All rights reserved.
*/

import React from 'react';
import { render } from 'react-dom';
import '../css/main.css';
import '../css/buttons.css';
import '../css/responsive.css';
import addUserImg from '../assets/add-user-32.png';
import PhoneListContainer from './components/PhonelistContainer';

const App = () => (
  <div className="app">
    <div>
      <header className="header">
        <div className="header-items-container center">
          <img src={addUserImg} alt="add new user" className="add-user-image" />
          <input className="search" placeholder="חיפוש" />
        </div>
      </header>
      <section>
        <PhoneListContainer />
      </section>
    </div>
  </div>
);

render(<App />, document.getElementById('app'));
