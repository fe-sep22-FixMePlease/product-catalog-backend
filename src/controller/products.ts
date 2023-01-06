/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
// eslint-disable-next-line import/extensions
import * as serviceProduct from '../services/products';

export const getAll = (req: Request, res: Response) => {
    const products = serviceProduct.getAll();

    res.send(products);
};
