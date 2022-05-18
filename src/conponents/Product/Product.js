import React from 'react';
import { Col } from 'react-bootstrap';
import {FaCartPlus} from 'react-icons/fa'
import './Product.css';
const Product = ({product, addToCart} ) => {
    const {name, price, seller, img, ratings} = product;
    return (
        <>
            <Col lg="4" sm="6" className='single-product-cal mb-4'>
                <div className="single-product d-flex flex-column">
                    <div className="product-img">
                        <img src={img} alt="" />
                    </div>
                    <div className="product-info">
                        <h4>{name}</h4>
                        <p className='price'>Price : ${price}</p>
                        <p className='manufacturer'><span>Manufacturer : {seller}</span></p>
                        <p className='rating'><span>Rating : {ratings} star</span></p>
                    </div>
                    <button onClick={()=>addToCart(product)} className='cart-btn mt-auto'>Add to cart <FaCartPlus></FaCartPlus> </button>
                </div>
            </Col>
        </>
    );
};

export default Product;