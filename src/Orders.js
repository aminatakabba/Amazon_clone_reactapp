import React, { useState, useEffect } from 'react';
import { db } from "./firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import { useHistory } from 'react-router-dom';
import { getBasketTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';


function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);
  const history = useHistory();


  useEffect(() => {
    if(user) {
        db
        .collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1 className="orders__confiramtion">Order confirmation</h1>
            <p>Order #<a>123-345-678</a></p>

            <h1 className="orders__total">Hello,</h1>
            <p>Thank you for shopping with us. We confirm that your items have been shipped. Your order derails will be sent to the email you have provided</p>

            <div className="ordesrs__adress">
                <p className="orders__adressParagraph">Your estimated delivery date is:</p>
                <p className="orders__adressBlackParagraph">Next Tuestday</p>
                <p className="orders__adressParagraph">Your shipping speed</p>
                <p className="orders__adressBlackParagraph">Standard</p>
                <button>Order Details</button>
            </div>
            

            <h1 className="orders__total">Payment sumary</h1>
            <hr/><br/>
            <p>Order #<a>123-345-678</a></p>

            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Total items: {basket.length} items
                        </p>
                        <p>
                            Shipping & Handling: Free
                        </p>
                        <p>
                            Order Total: <strong>{value}</strong>
                        </p>
                        
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"£"}
            /><br/>
            <hr/>
            <div className="orders__button">
                <Link to="/">
                    <button className="orders__back">Go back to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Orders