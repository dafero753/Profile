import React from 'react'
import About from './About'
import MyFamily from './MyFamily'
import MyRepositories from './MyRepositories'

import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <About />
      </div>
      <div>
        <MyFamily />
      </div>
      <div>
        <MyRepositories />
      </div>
    </div>
  );
}

export default App;
