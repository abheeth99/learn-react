import React from 'react';
import './App.css';
import { useLocalStore, useObserver } from 'mobx-react-lite';

function App() {
  return (
      <main>
        {process.env.REACT_APP_NAME}
      </main>
  );
}

export default App;
