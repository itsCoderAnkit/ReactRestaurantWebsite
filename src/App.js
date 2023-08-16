import React,{useState} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartItem from './components/Cart/CartItem';
import CartProvider from './store/CartProvider';



function App() {

  const [cartIsShown,setCartIsShown] = useState(false)

  const closeCart = () =>{
    setCartIsShown(false)
  }

  const showYourCart = () =>{
    setCartIsShown(true)
  }

  return (
    <CartProvider>
      {cartIsShown && <CartItem onClose={closeCart} backdropClosingCart={closeCart}/>}
      <Header showCart={showYourCart}></Header>
    <main>
      <Meals></Meals>
    </main>
    </CartProvider>
  );
}

export default App;
