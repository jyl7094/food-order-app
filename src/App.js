import React from 'react';

import Header from './components/Layout/Header/Header';
// import Body from './components/Body/Body';
import MealsSummary from './components/Layout/Body/MealsSummary';
import Card from './components/UI/Card';
import MealItemForm from './components/Layout/Body/MealItemForm';

function App() {
  return (
    <>
      <Header />
      <MealsSummary />
      <MealItemForm></MealItemForm>{/* <Card>
        <p>hi</p>
      </Card> */}
    </>
  );
}

export default App;
