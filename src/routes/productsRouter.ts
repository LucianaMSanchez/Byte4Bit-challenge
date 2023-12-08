import { Router } from 'express';

import {
    getProductDetail,
    getProductByName,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../handlers/productsHandlers";

const productsRouter = Router();

productsRouter.get("/:id", getProductDetail);    

productsRouter.delete("/:id", deleteProduct); 

productsRouter.get("/search", getProductByName);

productsRouter.get("/", getProducts);    

productsRouter.post("/", createProduct);    

productsRouter.put("/", updateProduct);    


export default productsRouter;