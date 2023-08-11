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

import React from 'react';
import CartIcon from '../Cart/CartIcon'
import './Button.css';

const Button = (props) => {
    return (
        <header className="header">
            <div className="nav-container">
                
                <button className="oval-button" onClick={props.buttonPressed}>
                    <span>
                        <CartIcon />
                    </span>
                    <span>Cart</span>
                    <span>3</span>
                </button>
            </div>
        </header>
    );
};

export default Button;