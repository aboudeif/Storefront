import { response } from 'express';
import supertest from 'supertest';
import app from '../server';


const request = supertest(app);
let test_product: number;

// test the root path
describe ('test endpoints', () => {
  it('should return 200', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  })
})

// test register new user
describe ('test register new user', () => {
  it('should return 200', async () => {
    const response = await request.post('/register').send({
      firstname: 'test',
      lastname: 'test',
      password: 'test123',
      email: 'test@test.com' })
    expect(response.body.message).toBe('User registered successfully')
  })
  })

  // test login user
  describe ('test login user', () => {
    it('should return 200', async () => {
      const response = await request.post('/login').send({
        email: 'test@test.com',
        password: 'test123' });
      expect(response.body.message).toBe('User logged in successfully');
    });
  })

  // test add new product
  describe ('test add new product', () => {
    it('should return 200', async () => {
      const response = await request.post('/product').send({
        name: 'test',
        price: 100,
        category: 'test'});
      expect(response.body.message).toBe('Product created successfully');
    });
  })

  // test get all products
  describe ('test get all products', () => {
    it('should return 200', async () => {
      const response = await request.get('/products');
      expect(response.body.message).toBe('Products retrieved successfully');
    })
  })



  // test delete product
  describe ('test delete product', () => {
    it('should return 200', async () => {
      const response = await request.delete('/product/1');
      expect(response.body.message).toBe('Product deleted successfully');
    });
  })

