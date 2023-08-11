import React,{Fragment, useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartItem from './components/Cart/CartItem';



function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const closeCart = () =>{
    setCartIsShown(false)
  }

  const showYourCart = () =>{
    setCartIsShown(true)
  }

  return (
    <Fragment>
      {cartIsShown && <CartItem onClose={closeCart} backdropClosingCart={closeCart}/>}
      <Header showCart={showYourCart}></Header>
    <main>
      <Meals></Meals>
    </main>
    </Fragment>
  );
}

export default App;
