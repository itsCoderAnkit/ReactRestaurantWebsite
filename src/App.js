import React,{Fragment} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartItem from './components/Cart/CartItem';



function App() {
  return (
    <Fragment>
      <CartItem></CartItem>
      <Header></Header>
    <main>
      <Meals></Meals>
    </main>
    </Fragment>
  );
}

export default App;
