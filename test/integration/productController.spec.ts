import request from 'supertest';
import { app } from '../../src/app';
describe("Product Controller",()=>{
    it("should return a product list, when all succeeds", async () => {
        //Arrange

        //Act
        const response = await request (app).get('/product').send();
        //Assert
        expect (response.status).toBe(200);
        expect (response.body).toEqual([{"brand": "Trakinas", "name": "Bolacha", "price": "R$2,99"}]);
    });
})