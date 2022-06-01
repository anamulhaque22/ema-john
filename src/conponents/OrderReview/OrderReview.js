import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import ReviewProduct from '../ReviewProduct/ReviewProduct';
import Cart from '../Cart/Cart';
import './OrderReview.css';
import {removeItem, deleteLocalData} from '../../utilities/addToLocalStorage';
import { FaCreditCard } from "react-icons/fa";


const OrderReview = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);


    const deleteReivewProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeItem(product.id);
    }
    const clearCart = ()=>{
        setCart([]);
        deleteLocalData();
    }
    return (
        <div className='review-container'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="product-item-container mb-sm-5">
                            {
                                cart.map(product => <ReviewProduct product={product} key={product.id} deleteProduct={deleteReivewProduct}></ReviewProduct>)
                            }
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="cart-in-review">
                            <Cart cart={cart} clearCart={clearCart}>
                            <button className='cart-btn-b another-color'>Review Order <FaCreditCard></FaCreditCard></button>
                            </Cart>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OrderReview;