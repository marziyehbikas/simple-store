import React from 'react'
import { DialogContent, DialogOverlay } from '@reach/dialog';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../../action/products';

const DeleteProductDialog = ({ showDialog, closeDialog, product }) => {
    const dispatch = useDispatch()
    return (
        <DialogOverlay
            isOpen={showDialog}
            onDismiss={closeDialog}
        >
            <DialogContent>
                <div>
                    <p>Are you sure you want to delete <b>{product.title}</b> product?</p>
                </div>
                <div>
                    <button
                        onClick={() =>
                            dispatch(deleteProduct(product.id)) &&
                            closeDialog()
                        }>
                            Yes, im sure
                    </button>
                    <button onClick={closeDialog}>
                        Skip
                </button>
                </div>
            </DialogContent>
        </DialogOverlay>
    )
}

export default DeleteProductDialog