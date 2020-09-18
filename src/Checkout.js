import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    className="checkout__ad"
                    src="https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg"
                    alt="checkout add"
                    />
                <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>

                {/* Checkout Product */}
                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
                {/* Checkout Product */}
                {/* Checkout Product */}
                {/* Checkout Product */}
            </div>
            </div>
            
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
