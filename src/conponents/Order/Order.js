import { Container, Row } from 'react-bootstrap';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToLocalDb, deleteLocalData } from '../../utilities/addToLocalStorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Order.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    //product adding in the cart
    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exits = cart.find(product => product.id === selectedProduct.id);
        if (!(exits)) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const remainProduct = cart.filter(product => product.id !== selectedProduct.id);
            exits.quantity += 1;
            newCart = [...remainProduct, exits];
        }
        setCart(newCart);
        addToLocalDb(selectedProduct.id)
    }

    //stored product data
    /*     useEffect(()=>{
            const storedProduct= getStoredProduct();
            const localStorProduct = [];
            for (const id in storedProduct) {
                const addedProduct = products.find(product => product.id === id);
                if(addedProduct){
                    addedProduct.quantity = storedProduct[id];
                    localStorProduct.push(addedProduct);
                }
            }
            setCart(localStorProduct);
        },[products])
     */
        const clearCart = ()=>{
            setCart([]);
            deleteLocalData();
        }
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
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/order-review'><button className='cart-btn-b another-color'>Review Order <FaArrowRight></FaArrowRight></button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Order;