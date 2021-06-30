import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from './../action/cart';

const Products = () => {
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    return (
        <div className="products">
            {
                products.map(item => (
                    <div
                        key={item.id}
                        className="product"
                    >
                        <img src={item.image} alt="" width="150px" height="180px"/>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <button onClick={() => dispatch(addProduct(item))}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products