import React from 'react';
import Store from './Store.js';
import List from './List.js';

function App(prop) {
  const store = prop.Store
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        <List />
      </div>
    </main>
  );
}

export default App;
