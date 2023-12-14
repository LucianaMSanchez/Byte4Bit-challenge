import { Router } from 'express';

import {
    getProductDetail,
    getProductByTitle,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productsControllers";

const productsRouter = Router();

productsRouter.get("/search", getProductByTitle);

productsRouter.get("/:id", getProductDetail);    

productsRouter.delete("/:id", deleteProduct); 

productsRouter.get("/", getProducts);    

productsRouter.post("/", createProduct);    

productsRouter.put("/:id", updateProduct);    


export default productsRouter;