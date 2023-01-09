import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import { router as productRouter } from './routes/products';

const app = express();
const basicRout = (enpoint: string) => `/.netlify/functions/server${enpoint}`;

app.use(cors());
app.use(express.static('img'));
app.use(basicRout('/static'), express.static('/img'));

app.get(basicRout('/'), (req, res) => {
    res.send({
        phone: 'add /products'
    });
});
app.use(basicRout('/products'), productRouter);

export const handler = serverless(app);
