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

export const getOneById  = (req: Request, res: Response) => {
    const { productId } = req.params;
    
    const productData = serviceProduct.getOneById(productId);
    
    if (!productData) {
        res.sendStatus(404);
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(productData);
};

export const getNewests = (req: Request, res: Response) => {
    let { category = '' } = req.query;

    if (typeof category !== 'string') {
        category = '';
    }

    const newests = serviceProduct.getNewests(category);

    res.send(newests);
};
