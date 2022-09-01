import {
  User,
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  promoteToAdmin,
  deleteUser
} from '../models/user.model'
import {
  Order,
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  getOrdersByUserId,
  deleteOrder
} from '../models/order.model'
import {
  Product,
  createProduct,
  getProductById,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../models/product.model'
import {
  OrderProduct,
  createOrderProduct,
  getOrderProductById,
  getAllOrderProducts,
  updateOrderProduct,
  deleteOrderProduct,
  getUserOrderProducts
} from '../models/order_product.model'

const testUser: User = {
  id: 1,
  firstname: 'test_user_first_name',
  lastname: 'test_user_last_name',
  password: '$2b$10$ap9u7TAkUAi7Rp6PzbyP0uy9y9r3TBTRCAF4Pxe4LPESpXKgesadm', // test_user_password
  email: 'testuser@testuser.com'
}
const testProduct: Product = {
  name: 'testproduct',
  price: 100.0,
  category: 'testproduct'
}

// test models
describe('test models', () => {
  // test user models
  describe('test user models', () => {
    // test model register new user
    it(`should return user`, async () => {
      const response = await createUser(testUser)
      delete response.id
      expect(response).toEqual({
        firstname: 'test_user_first_name',
        lastname: 'test_user_last_name',
        password: '$2b$10$ap9u7TAkUAi7Rp6PzbyP0uy9y9r3TBTRCAF4Pxe4LPESpXKgesadm',
        email: 'testuser@testuser.com',
        role: 'user'
      })
    })

    // promote user to admin role
    it('should return user with role: admin', async () => {
      const response = await promoteToAdmin(testUser)
      expect(response.role).toBe('admin')
    })

    // test model get user by email
    it(`should return user with id: `, async () => {
      const response = await getUserByEmail(testUser.email)
      expect(response.id).toBe(1)
    })

    // test model get user by id
    it(`should return return user with id: 1`, async () => {
      const response = await getUserById(Number(testUser.id))
      expect(response.id).toBe(1)
    })

    // test model get all users
    it('should return an array of users', async () => {
      const response = await getAllUsers()
      expect(response).toBeInstanceOf(Array<User>)
    })
  })

  // test product models
  describe('test product models', () => {
    // test model add new product
    it(`should return product with name: ${testProduct.name}`, async () => {
      const response = await createProduct(testProduct)
      delete response.id
      response.price = Number(response.price)
      expect(response).toEqual({
        name: 'testproduct',
        price: 100.0,
        category: 'testproduct',
        is_available: true
      })
    })

    // test model get product by id
    it(`should return product with name: ${testProduct.name}`, async () => {
      const response = await getProductById(1)
      delete response.id
      response.price = Number(response.price)
      expect(response).toEqual({
        name: 'testproduct',
        price: 100.0,
        category: 'testproduct',
        is_available: true
      })
    })

    // test model get all products
    it('should return an array of products', async () => {
      const response = await getAllProducts()
      expect(response).toBeInstanceOf(Array<Product>)
    })

    // test model update product
    it('should return product with name: test2', async () => {
      const response = await updateProduct({
        id: 1,
        name: 'test2',
        price: 200.0,
        category: 'test2'
      })
      expect(response.name).toBe('test2')
      testProduct.name = response.name
    })
  })

  // test order models
  describe('test order models', () => {
    // test model add new order
    it(`should return order`, async () => {
      const response = await createOrder({
        user_id: 1
      })
      delete response.id
      expect(response).toEqual({
        user_id: 1,
        status: 'active'
      })
    })

    // test model get order by id
    it(`should return order with user_id: 1`, async () => {
      const response = await getOrderById(1)
      expect(response.user_id).toBe(1)
    })

    // test model get all orders
    it('should return an array of orders', async () => {
      const response = await getAllOrders()
      expect(response).toBeInstanceOf(Array<Order>)
    })

    // test model update order
    it('should return order with status: completed', async () => {
      const response = await updateOrder({
        id: 1,
        user_id: 1,
        status: 'completed'
      })
      expect(response.status).toBe('completed')
    })

    // test model get orders by user id
    it('should return an array of orders', async () => {
      const response = await getOrdersByUserId(1)
      expect(response).toBeInstanceOf(Array<Order>)
    })
  })

  // test order product models
  describe('test order product models', () => {
    // test model add new order product
    it(`should return order product`, async () => {
      const response = await createOrderProduct({
        product_id: 1,
        quantity: 1,
        price: 200.0,
        order_id: 1
      })
      delete response.id
      response.price = Number(response.price)
      expect(response).toEqual({
        product_id: 1,
        quantity: 1,
        price: 200.0,
        order_id: 1
      })
    })

    // test model get order product by id
    it(`should return order product with order_id: 1`, async () => {
      const response = await getOrderProductById(1)
      expect(response.order_id).toBe(1)
    })

    // test model get all order products
    it('should return an array of order products', async () => {
      const response = await getAllOrderProducts()
      expect(response).toBeInstanceOf(Array<OrderProduct>)
    })

    // test model update order product
    it(`should return order product with quantity: 2`, async () => {
      const response = await updateOrderProduct({
        id: 1,
        order_id: 1,
        product_id: 1,
        quantity: 2,
        price: 200.0
      })
      expect(response.quantity).toBe(2)
    })

    // test model get user order products
    it('should return an array of order products', async () => {
      const response = await getUserOrderProducts(1)
      expect(response).toBeInstanceOf(Array<OrderProduct>)
    })
  })

  // test delete order product model
  describe('test delete order product model', () => {
    // test model delete order product
    it(`should return order product`, async () => {
      const response = await deleteOrderProduct(1)
      delete response.id
      response.price = Number(response.price)
      expect(response).toEqual({
        order_id: 1,
        product_id: 1,
        quantity: 2,
        price: 200.0
      })
    })
  })

  // test delete order model
  describe('test delete order model', () => {
    // test model delete order
    it(`should return order`, async () => {
      const response = await deleteOrder(1)
      delete response.id
      expect(response).toEqual({
        user_id: 1,
        status: 'completed'
      })
    })
  })

  // test delete product model
  describe('test delete product model', () => {
    // test model delete product
    it(`should return product`, async () => {
      const response = await deleteProduct(1)
      delete response.id
      response.price = Number(response.price)
      expect(response).toEqual({
        name: 'test2',
        price: 200.0,
        category: 'test2',
        is_available: true
      })
    })
  })

  // test delete user model
  describe('test delete user model', () => {
    // test model delete user
    it(`should return user`, async () => {
      const response = await deleteUser(1)
      delete response.id
      expect(response).toEqual({
        firstname: 'test_user_first_name',
        lastname: 'test_user_last_name',
        email: 'testuser@testuser.com',
        password: '$2b$10$ap9u7TAkUAi7Rp6PzbyP0uy9y9r3TBTRCAF4Pxe4LPESpXKgesadm',
        role: 'admin'
      })
    })
  })
})
