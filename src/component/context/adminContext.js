import { createContext } from "react";

export const adminContext = createContext({
    validator: null,
    openNewProductDialog: () => {},
    closeNewProductDialog: () => { },
    openeditProductDialog: () => { },
    closeEditProductDialog: () => { },
    openDeleteProductDialog: () => { },
    closeDeleteProductDialog: () => { }
})