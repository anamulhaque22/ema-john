const addToLocalDb = id => {
    let product = getStoredProduct();


    //item add in local storage
    if (product[id]) {
        product[id] += 1;
    } else {
        product[id] = 1;
    }
    localStorage.setItem("shopping-items", JSON.stringify(product));

}

const removeItem = id => {
    const storedProduct = localStorage.getItem('shopping-items');
    if(storedProduct){
            const storedProductOb = JSON.parse(storedProduct);
            if(id in storedProductOb){
                delete storedProductOb[id];
                localStorage.setItem("shopping-items", JSON.stringify(storedProductOb));
            }
    }
}
const getStoredProduct = ()=>{
    let product = {};

    //get item form local storage
    const storedProduct = localStorage.getItem('shopping-items');
    if(storedProduct){
            product = JSON.parse(storedProduct);
    }
    return product;
}

const deleteLocalData = ()=>{
    localStorage.removeItem('shopping-items');
}

export { addToLocalDb, removeItem, deleteLocalData, getStoredProduct };