import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { adminContext } from '../context/adminContext';

const AdminPanel = () => {
    const products = useSelector(state => state.products)
    const { openNewProductDialog, openeditProductDialog, openDeleteProductDialog} = useContext(adminContext)
    return (
        <div>
            <button onClick={openNewProductDialog}>Add New Product +</button>
            <table>
                <caption>All Products</caption>
                <tbody>
                    {
                        products.map(item => (
                            <tr key={item.id}><td>{item.title}
                                <button onClick={() => openeditProductDialog(item)}>Update</button>
                                <button onClick={() => openDeleteProductDialog(item)}>Delete</button>
                            </td></tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminPanel