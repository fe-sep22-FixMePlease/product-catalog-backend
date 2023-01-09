import { Request, Response } from 'express';
import * as serviceProduct from '../services/products';

export const getAll = (req: Request, res: Response) => {
    const { page = '1', perPage = 'all' } = req.query;

    if (typeof page !== 'string' || typeof perPage !== 'string') {
        res.status(500);
        return;
    }

    const products = serviceProduct.getAll(page, perPage);

    res.send(products);
};
