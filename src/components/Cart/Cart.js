import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart=props.cart;
    //const total=cart.reduce((total,prd)=>total=total+prd.price,0)
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;   
    }
    let shipping=0;

    if(total>35){
        shipping =0;
    }
    else if(total>15){
         shipping =4.99;
    }
    else if(total>0){
         shipping =12.99;
    }
    const vat=total/10;

    const formatNumber=(num)=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    const GrandTotal=total + shipping + vat ;

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <p>Number Of Item:{cart.length}</p>
            <p>Product Price:{total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax+Vat:{formatNumber(vat)}</small></p>
            <h4>Total Price:{formatNumber(GrandTotal)}</h4>
        </div>
    )
};

export default Cart;