import { Request, Response } from 'express';
import * as serviceProduct from '../services/products';

const sortType: {} = {
    newest: 'year',
    alphabetically: 'name',
    cheapest: 'price',
};

const categories: {} = {
    phones: 'phones',
    tablets: 'tablets',
    accessories : '9 ',
};

export const getAll = (req: Request, res: Response) => {
    const { 
        page = '1',
        perPage = 'all', 
        sortBy = '', 
        category = ''
    } = req.query;

    if (
        typeof page !== 'string' 
        || typeof perPage !== 'string'
        || typeof sortBy !== 'string'
        || typeof category !== 'string') {
        res.status(500);
        return;
    }

    const products = serviceProduct.getAll(
        page, 
        perPage, 
        sortType[sortBy as keyof typeof sortType],
        categories[category as keyof typeof categories],
        );

    res.send(products);
};

export const getOne = (req: Request, res: Response) => {
    const { productId } = req.params;
    const productData = serviceProduct.getOne(productId);

    res.setHeader('Content-Type', 'application/json');
    res.end(productData);
};
