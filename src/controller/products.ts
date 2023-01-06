import { Request, Response } from 'express';
import * as serviceProduct from '../services/products';

export const getAll = (req: Request, res: Response) => {
    const products = serviceProduct.getAll();

    res.send(products);
};
