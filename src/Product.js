import React from 'react';
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                {/* descritption and title */}
                <p>{title}</p>

                {/* Product price */}
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                {/* Product rating */}
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                    <p>⭐</p>

                    ))}
                </div>
            </div>
            {/* Image of the product */}
            <img src={image} alt="The Lean startup"/>

            {/* Button to add in the basket */}
            <button className="product__basket" onClick={addToBasket}>Add to basket</button>
            
        </div>
    )
}

export default Product
