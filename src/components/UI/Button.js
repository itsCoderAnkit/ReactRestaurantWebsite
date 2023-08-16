// import React from 'react'
// import CartIcon from '../Cart/CartIcon'

// const Button = () => {

//     return (
//         <button>
//             <span>
//                 <CartIcon />
//             </span>
//             <span>Cart</span>
//             <span>3</span>
//         </button>
//     )

// }

// export default Button

import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import React from 'react';
import CartIcon from '../Cart/CartIcon'
import './Button.css';

const Button = (props) => {

    const cartCtx = useContext(CartContext)

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)

    return (
        <header className="header">
            <div className="nav-container">
                
                <button className="oval-button" onClick={props.buttonPressed}>
                    <span>
                        <CartIcon />
                    </span>
                    <span>Cart</span>
                    <span>{numberOfCartItems}</span>
                </button>
            </div>
        </header>
    );
};

export default Button;