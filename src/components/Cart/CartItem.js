import Modal from '../UI/Modal'
import classes from './CartItem.module.css'

const CartItem = (props) =>{

    const CartItem = (<ul className={classes['cart-items']}>{
    [{id:1 , name:'sushi', amount:2, price:102}].map((item)=>(<li>{item.name}</li>))}
    </ul>)
    return (
        <Modal closeCart={props.backdropClosingCart}> 
            {CartItem}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span> 100</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt'] } onClick={props.onClose}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>

    )

}

export default CartItem

// import Modal from '../UI/Modal';
// import classes from './Cart.module.css';

// const Cart = (props) => {
//   const cartItems = (
//     <ul className={classes['cart-items']}>
//       {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
//         <li>{item.name}</li>
//       ))}
//     </ul>
//   );

//   return (
//     <Modal>
//       {cartItems}
//       <div className={classes.total}>
//         <span>Total Amount</span>
//         <span>35.62</span>
//       </div>
//       <div className={classes.actions}>
//         <button className={classes['button--alt']}>Close</button>
//         <button className={classes.button}>Order</button>
//       </div>
//     </Modal>
//   );
// };

// export default Cart;