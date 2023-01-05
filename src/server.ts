import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { router as productRouter } from './routes/products';

// import * as productRouter from '../src/routes/products'

// const router = express.Router();

const app = express();

app.use(cors());

// router.get('/', (req, res) => {
//     res.json({
//         'hello': '123',
//     })
// })

app.use('/.netlify/functions/server', productRouter);

export const handler = serverless(app);
