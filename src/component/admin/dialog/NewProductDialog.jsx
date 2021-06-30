import { DialogContent, DialogOverlay } from "@reach/dialog";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { adminContext } from "../../context/adminContext";
import { toast } from 'react-toastify';
import { newProduct } from '../../../action/products'

const NewProductDialog = ({ showDialog, closeDialog }) => {
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();
    const [description, setDescription] = useState();
    const [category, setCategory] = useState();
    const [, forceUpdate] = useState();

    const dispatch = useDispatch();

    const { validator } = useContext(adminContext)

    const handleSubmit = (event) => {
        event.preventDefault();

        try {
            if (validator.current.allValid()) {
                let data = {
                    title,
                    price,
                    description,
                    image,
                    category
                }
                dispatch(newProduct(data));
                toast.success("New Product Added")
                closeDialog();
            } else {
                validator.current.showMessages();
                forceUpdate(1);
            }
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
                            onChange={e => {
                                setTitle(e.target.value);
                                validator.current.showMessageFor("title");
                            }}
                        />
                        {validator.current.message(
                            "title",
                            title,
                            "required|min:5"
                        )}

                        <input
                            type="price"
                            name="price"
                            placeholder="Price "
                            value={price}
                            onChange={e => {
                                setPrice(e.target.value);
                                validator.current.showMessageFor("price");
                            }}
                        />
                        {validator.current.message(
                            "price",
                            price,
                            "required|integer"
                        )}

                        <textarea
                            name="description"
                            placeholder="Description"
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value);
                                validator.current.showMessageFor("description");
                            }}
                        />
                        {validator.current.message("description", description, "required")}

                        <input
                            type="file"
                            name="image"
                            onChange={e => {
                                setImage(true);
                                validator.current.showMessageFor("image");
                            }}
                        />
                        {validator.current.message(
                            "image",
                            image,
                            "required"
                        )}

                        <label htmlFor="">electronics, jewelery, men clothing, women clothing</label>
                        <input
                            type="text"
                            name="category"
                            onChange={e => {
                                setCategory(e.target.value);
                                validator.current.showMessageFor("category");
                            }} />
                        {validator.current.message(
                            "category",
                            category,
                            "required"
                        )}
                        <div>
                            <button type="submit">Save</button>
                            <button onClick={closeDialog}>Skip</button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </DialogOverlay>
    );
};

export default NewProductDialog;