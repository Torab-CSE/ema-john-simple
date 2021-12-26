import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, stock } = props.product;
   // console.log(props);
    return (
        <div className='product'>
            <div className='product-image'>
                <img src={img} alt="" />
            </div>
            <div className='product-detail'>
                <h5>{name}</h5>
                <p>by:{seller}</p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button onClick={()=>props.addHandleProduct(props.product)}> 
                    <FontAwesomeIcon icon={faShoppingCart} />
                     Add to cart</button>
            </div>
        </div>
    );
};

export default Product;