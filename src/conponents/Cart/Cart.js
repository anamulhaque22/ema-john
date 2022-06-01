import React from 'react';
import './Cart.css';
import { FaRegTrashAlt } from "react-icons/fa";
const Cart = ({ cart,children,clearCart }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity+=product.quantity;
        total+=(product.price * product.quantity);
        shipping+=(product.shipping * product.quantity);
    }
    let tax = parseFloat((total*0.1).toFixed(2));
    let grandTotal= total+shipping+tax;
    return (
        <div>
            <h5>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h4>Grand Total: ${grandTotal}</h4>
            <div className="card-button-area">
                <button onClick={()=>clearCart()} className='cart-btn-b'>Clear Cart <FaRegTrashAlt></FaRegTrashAlt></button>
                {children}
            </div>
        </div>
    );
};

export default Cart;