import { User, promoteToAdmin, deleteUser } from './../models/user.model'

import supertest from 'supertest'
import app from '../server'
import { Product } from '../models/product.model'
import { Order } from '../models/order.model'

const request = supertest(app)
let testUser: User
let testProduct: Product
let testOrder: Order
let token: string

// test the root path
describe('test endpoint', () => {
  it('should return 200', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })
})

// test register new user
describe('test register new user', () => {
  // test register new user with valid data
  it('should return message: User registered successfully', async () => {
    const response = await request.post('/register').send({
      firstname: 'test',
      lastname: 'test',
      password: 'test123',
      email: 'test@test.com'
    })
    expect(response.body.message).toBe('User registered successfully')
    testUser = response.body.user
  })

  // promote user to admin role
  afterAll(async () => {
    await promoteToAdmin(testUser)
  })
})

// test login user
describe('test login user', () => {
  it('should return return message: User logged in successfully', async () => {
    const response = await request.post('/login').send({
      email: 'test@test.com',
      password: 'test123'
    })
    expect(response.body.message).toBe('User logged in successfully')
    token = response.body.user.token
  })
})

// test get user by id
describe('test get user by id', () => {
  it('should return return message: User retrieved successfully', async () => {
    const response = await request.get(`/user/${testUser.id}`).auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('User retrieved successfully')
  })
})

// test get all users
describe('test get all users', () => {
  it('should return return message: All users retrieved successfully', async () => {
    const response = await request.get('/user').auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('All users retrieved successfully')
  })
})

// test add new product
describe('test add new product', () => {
  it('should return message: Product created successfully', async () => {
    const response = await request
      .post('/product')
      .send({
        name: 'test',
        price: 100,
        category: 'test'
      })
      .auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Product created successfully')
    testProduct = response.body.product
  })
})

// test get all products
describe('test index all products', () => {
  it('should return message: All products retrieved successfully', async () => {
    const response = await request.get('/product')
    expect(response.body.message).toBe('All products retrieved successfully')
  })
})

// test get product by id
describe('test show product by id', () => {
  it('should return message: Product retrieved successfully', async () => {
    const response = await request.get(`/product/${testProduct.id}`)
    expect(response.body.message).toBe('Product retrieved successfully')
  })
})

// test update product
describe('test update product', () => {
  it('should return message: Product updated successfully', async () => {
    const response = await request
      .put(`/product/${testProduct.id}`)
      .send({
        name: 'newtest',
        price: 101,
        category: 'newtest'
      })
      .auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Product updated successfully')
  })
})

// test create new order
describe('test add new order', () => {
  it('should return message: Order created successfully', async () => {
    const response = await request
      .post('/order')
      .send({
        product_id: testProduct.id,
        quantity: 1
      })
      .auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Order created successfully')
    testOrder = response.body.order
  })
})

// test get user orders
describe('test index user orders', () => {
  it('should return message: Orders retrieved successfully', async () => {
    const response = await request.get(`/order/user/${testUser.id}`).auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Orders retrieved successfully')
  })
})

// test get order by id
describe('test show order by id', () => {
  it('should return message: Order retrieved successfully', async () => {
    const response = await request.get(`/order/${testOrder.id}`).auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Order retrieved successfully')
  })
})

// test delete order
describe('test delete order', () => {
  it('should return message: Order deleted successfully', async () => {
    const response = await request.delete(`/order/${testOrder.id}`).auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Order deleted successfully')
  })
})

// test delete product
describe('test delete product', () => {
  it('should return message: Product deleted successfully', async () => {
    const response = await request.delete(`/product/${testProduct.id}`).auth(token, { type: 'bearer' })
    expect(response.body.message).toBe('Product deleted successfully')
  })

  // delete test user
  afterAll(async () => {
    await deleteUser(testUser)
  })
})
