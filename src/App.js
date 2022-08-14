import React from 'react';

import Header from './components/Layout/Header/Header';
import Meals from './components/Layout/Meals/Meals';

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
