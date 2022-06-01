import React from 'react';
import './ReviewProduct.css';
import { FaRegTrashAlt } from "react-icons/fa";
const ReviewProduct = ({ product, deleteProduct }) => {
    const { name, price, img, shipping } = product;
    return (

        <div className='review-product-item d-flex'>
            <div className="review-product-info d-flex">
                <div className="review-product-img">
                    <img src={img} alt="" />
                </div>
                <div className="review-product-text">
                    <h4>{name}</h4>
                    <p>Price: $<span>{price}</span></p>
                    <p>Shipping Charge: $<span>{shipping}</span></p>
                </div>
            </div>
            <div className="delete-btn">
                <button onClick={() => deleteProduct(product)} className='d-btn'><FaRegTrashAlt></FaRegTrashAlt></button>
            </div>
        </div>


    );
};

export default ReviewProduct;