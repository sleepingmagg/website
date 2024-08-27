import React from 'react';
import data from './data.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </header>
    </div>
  );
}

export default App;
