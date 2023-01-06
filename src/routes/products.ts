import express, { Express, Request, Response } from 'express';
import * as productController from '../controller/products'
export const router = express.Router();

router.get('/', productController.getAll)
