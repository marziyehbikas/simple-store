import { isEmpty } from 'lodash'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { checkout } from '../action/cart'
import { increase, decrease, removeProduct } from './../action/cart';


const Cart = () => {
    const cart = useSelector(state => state.cart)
    // const cart = JSON.parse(localStorage.getItem('cart'))
    const check = useSelector(state => state.checkout)
    const dispatch = useDispatch()

    const [success, setSuccess] = useState(false)
    const handleClick = () => {
        setSuccess(!success)
    }

    return (
        <div>
            {
                isEmpty(cart) && success == false? <h1>Cart is Empty</h1> : cart.map(item => (
                    <div key={item.product.id}>
                        {
                            item.count > 0 ?
                                <Fragment>
                                    <img src={item.product.image} alt="" width="60px" height="80px" />
                                    <p>{item.product.title}</p>
                                    {item.count == 1 ? <p>price: {item.product.price}</p> : <p>price: {item.count * item.product.price}</p>}
                                    <p>count: {item.count}</p>
                                    <button onClick={() => dispatch(increase(item.product))}>+</button>
                                    <button onClick={() => dispatch(decrease(item.product))}>-</button>
                                    <button onClick={() => dispatch(removeProduct(item.product))}>Remove</button>
                                </Fragment> : null
                        }
                    </div>
                ))
            }
            {
                !isEmpty(cart) ?
                    <Fragment>
                        <button onClick={() => { dispatch(checkout()); handleClick()}}>Check out</button>
                    </Fragment> : null
            }
            <div className={success ? "checkout active" : "checkout"}>
                <h1>Checkout Successfuly</h1>
                <p>Total Price: {check}</p>
            </div>

        </div >
    )
}

export default Cart