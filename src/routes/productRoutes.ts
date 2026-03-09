import {Router, Request, Response} from 'express';
import {IProduct} from '../interfaces/IProduct';

export const productRouter = Router();

productRouter.get('/', (_req: Request, res: Response) => {
  const product: IProduct = {
    name: 'Bolacha',
    brand: 'Trakinas',
  };

  res.json([product]);
});
