import React, { useRef, useState } from 'react'
import { adminContext } from './adminContext'
import SimpleReactValidator from 'simple-react-validator'

import NewProductDialog from '../admin/dialog/NewProductDialog'
import UpdateProductDilog from './../admin/dialog/UpdateProductDialog';
import DeleteProductDialog from './../admin/dialog/DeleteProductDialog';

const AdminContext = ({ children }) => {
    const [newProductDialog, setNewProductDialog] = useState(false)
    const [editProductDialog, setEditProductDialog] = useState(false)
    const [deleteProductDialog, setDeleteProductDialog] = useState(false)
    const [currentProduct, setCurrentProduct] = useState({})

    const validator = useRef(
        new SimpleReactValidator({
            messages: {
                required: "This field is required",
                min: "The input value should not be less than 5 characters",
                integer: "The input value must be a number"
            },
            element: message => <div style={{ color: "red", fontSize: '12px', marginTop: '8px' }}>{message}</div>
        })
    );

    const openNewProductDialog = () => setNewProductDialog(true)
    const closeNewProductDialog = () => setNewProductDialog(false)

    const openeditProductDialog = Product => {
        setEditProductDialog(true)
        setCurrentProduct(Product)
    }

    const closeEditProductDialog = () => setEditProductDialog(false)

    const openDeleteProductDialog = Product => {
        setDeleteProductDialog(true)
        setCurrentProduct(Product)
    }

    const closeDeleteProductDialog = () => setDeleteProductDialog(false)

    return (
        <adminContext.Provider value={{
            validator,
            openNewProductDialog,
            closeNewProductDialog,
            openeditProductDialog,
            closeEditProductDialog,
            openDeleteProductDialog,
            closeDeleteProductDialog
        }}>
            <NewProductDialog
                showDialog={newProductDialog}
                closeDialog={closeNewProductDialog}
            />
            <UpdateProductDilog
                showDialog={editProductDialog}
                closeDialog={closeEditProductDialog}
                product={currentProduct}
            />
            <DeleteProductDialog
                showDialog={deleteProductDialog}
                closeDialog={closeDeleteProductDialog}
                product={currentProduct}
            />
            {children}
        </adminContext.Provider>
    )
}

export default AdminContext