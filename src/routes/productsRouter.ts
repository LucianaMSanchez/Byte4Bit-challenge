import { Router } from 'express';

import {
    getProductDetail,
    getProductByName,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productsControllers";

const productsRouter = Router();

productsRouter.get("/:id", getProductDetail);    

productsRouter.delete("/:id", deleteProduct); 

productsRouter.get("/", getProducts);    

productsRouter.get("/search", getProductByName);

productsRouter.post("/", createProduct);    

productsRouter.put("/:id", updateProduct);    


export default productsRouter;