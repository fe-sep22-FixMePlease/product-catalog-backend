import express, { Request, Response, NextFunction } from 'express';
import * as productController from '../controller/products';

export const router = express.Router();

router.get('/', productController.getAll);

const middleware = (action: string) => (req: Request, res: Response, next: NextFunction) => {
    if (req.query.action === action) {
        next();
    } else {
        next('route');
    };
};

router.get('/:productId', middleware('productId'), productController.getOne);
router.get('/new', middleware('new'), productController.getNewests);
