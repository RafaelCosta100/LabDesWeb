import express from 'express';
import {productRouter} from './routes/productRoutes';
import dotenv from 'dotenv';

const app = express();


app.use(express.json());

app.use('/product', productRouter);

export {app};