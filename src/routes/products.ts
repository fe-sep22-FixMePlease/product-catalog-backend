import express from 'express';
// eslint-disable-next-line import/no-unresolved, import/extensions
import * as productController from '../controller/products';

export const router = express.Router();

router.get('/', productController.getAll);
