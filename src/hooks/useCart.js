import { useEffect, useState } from "react";
import { getStoredProduct } from "../utilities/addToLocalStorage";

const useCart = (products)=>{
    const [cart, setCart] = useState([]);
    useEffect(()=> {
        const storedProductLocal = getStoredProduct();
        const addedProduct = [];
        for(const id in storedProductLocal){
            const matchingProduct = products.find(product => product.id === id);
            if(matchingProduct){
                matchingProduct.quantity = storedProductLocal[id];
                addedProduct.push(matchingProduct);
            }
        }
        setCart(addedProduct);  
    },[products]);
    return [cart, setCart];
}
export default useCart;