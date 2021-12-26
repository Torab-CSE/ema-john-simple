import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [products, setProduct] = useState([])
    const productAll = products.slice(0, 15);
    const [ cart, setCart]=useState([]);

    const addHandleProduct=(product)=>{
      // console.log("product added",product)
        const newCart=[...cart,product]
        setCart(newCart);
    }
    
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    //console.log(productAll);
    return (
        <div class='shop-container'>
            <div class='product-container'>
                {productAll.map(product =>  <Product
                                                 addHandleProduct={addHandleProduct}
                                                 product={product}>

                                            </Product>)}
            </div>

            <div class='cart-container'>
                    <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;