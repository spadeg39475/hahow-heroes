import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import HeroList from 'Components/HeroList';

function App() {
  return (
    <div className="App">
      <Router>
        <HeroList />
      </Router>
    </div>
  );
}

export default App;
