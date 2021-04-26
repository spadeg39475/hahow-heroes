import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import HeroList from 'Components/HeroList';
import HeroProfile from 'Components/HeroProfile';

import { GlobalStyle } from './style';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <HeroList />
        <Route path="/heroes/:heroId" component={HeroProfile} />
      </Router>
    </div>
  );
}

export default App;
