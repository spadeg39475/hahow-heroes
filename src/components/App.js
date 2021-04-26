import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import HeroList from 'Components/HeroList';
import HeroProfile from 'Components/HeroProfile';

import { GlobalStyle, HeroApp } from './style';

function App() {
  return (
    <HeroApp>
      <GlobalStyle />
      <Router>
        <HeroList />
        <Route path="/heroes/:heroId" component={HeroProfile} />
      </Router>
    </HeroApp>
  );
}

export default App;
