import { Request, Response } from 'express';
import Product from '../models/product';


export const getProductByName = async (req: Request, res: Response) => {
    try {
        const name = req.query.name as string;
        const product = await Product.find({ name });
        if (!product || product.length === 0) {
            return res.status(200).json('No product with that name');
        }
        return res.status(200).json(product);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find();
        if (!products || products.length === 0) {
            return res.status(400).json('No products');
        }
        return res.status(200).json(products);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { title, description, price, image } = req.body;
        const product = new Product({ title, description, price, image });
        await product.save();
        return res.status(200).json(product);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const getProductDetail = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json("Succesfully deleted");
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        if(error instanceof Error){
            return res.status(500).json({ message: error.message });
        }
    }
};
