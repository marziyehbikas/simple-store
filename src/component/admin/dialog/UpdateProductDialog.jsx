import { DialogContent, DialogOverlay } from "@reach/dialog";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { updateProduct } from './../../../action/products';

const UpdateProductDilog = ({ showDialog, closeDialog, product }) => {
    const [productId, setProductId] = useState();
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setProductId(product.id)
        setTitle(product.title)
        setPrice(product.price)
        setImage(product.image)
        setDescription(product.description)
        setCategory(product.category)

        return () => {
            setProductId()
            setTitle()
            setPrice()
            setImage()
            setDescription()
            setCategory()
        }
    }, [product])

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            let data = {
                title,
                price,
                description,
                image,
                category
            }
            dispatch(updateProduct(productId, data));
            closeDialog();

        } catch (ex) {
            console.log(ex);
        }
    };

    return (
        <DialogOverlay
            isOpen={showDialog}
            onDismiss={closeDialog}>

            <DialogContent>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />

                        <input
                            type="price"
                            name="price"
                            placeholder="Price "
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />

                        <textarea
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <input
                            type="file"
                            name="image"
                            onChange={e => setImage(true)}
                        />

                        <label htmlFor="">electronics, jewelery, men clothing, women clothing</label>
                        <input
                            type="text"
                            name="category"
                            onChange={e => setCategory(e.target.value)} />

                        <div>
                            <button type="submit">Update</button>
                            <button onClick={closeDialog}>Skip</button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </DialogOverlay>
    );
};

export default UpdateProductDilog;