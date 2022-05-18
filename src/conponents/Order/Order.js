import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { addToLocalDb, getStoredProduct } from '../../utilities/addToLocalStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Order.css";


const Order = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    //get the data from database
    useEffect(()=>{
        fetch("products.json")
        .then(response => response.json())
        .then(data => {
            setProducts(data);
        });
    }, []);

    //product adding in the cart
    const addToCart = (selectedProduct)=>{
        let newCart = [];
        const exits = cart.find(product => product.id === selectedProduct.id);
        if(!(exits)){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }else{
            const remainProduct = cart.filter(product => product.id !== selectedProduct.id);
            exits.quantity+=1;
            newCart = [...remainProduct, exits];
        }
        setCart(newCart);
        addToLocalDb(selectedProduct.id)
    }

    //stored product data
    useEffect(()=>{
        const storedProduct= getStoredProduct();
        const localStorProduct = []
        for (const id in storedProduct) {
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                addedProduct.quantity = storedProduct[id];
                localStorProduct.push(addedProduct);
            }
        }
        setCart(localStorProduct);
    },[products])


    return (
        <div className='order-container d-flex'>
            <div className="product-container">
                <Container>
                    <Row className='align-items-stretch'>
                        {
                            products.map(product => <Product product={product} addToCart={addToCart} key={product.id}></Product>)
                        }
                    </Row>
                </Container>
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>            
        </div>
    );
};

export default Order;