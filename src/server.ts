import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { router as productRouter } from './routes/products';

const app = express();

app.use(cors());

app.use('/.netlify/functions/server/products', productRouter);

export const handler = serverless(app);
