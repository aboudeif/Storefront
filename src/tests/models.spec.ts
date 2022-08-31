import { User, createUser, getAllUsers, getUserByEmail, getUserById, promoteToAdmin, deleteUser } from "../models/user.model";
import { Order, createOrder, getOrderById, getAllOrders, updateOrder, getOrdersByUserId, deleteOrder } from "../models/order.model";
import { Product, createProduct, getProductById, getAllProducts, updateProduct, deleteProduct } from "../models/product.model";
import { OrderProduct, createOrderProduct, getOrderProductById, getAllOrderProducts, updateOrderProduct, deleteOrderProduct, getUserOrderProducts } from "../models/order_product.model";


let testUser: User = {
  firstname: "test",
  lastname: "test",
  password: "test123",
  email: "test@test.com"
}
let testProduct: Product = {
  name: "test",
  price: 100,
  category: "test"
}
let testOrder: Order;
let testOrderProduct: OrderProduct;

// test user models
describe("test user models", () => {
  // test model register new user
  it(`should return user with email: ${testUser.email}`, async () => {
    const response = await createUser(testUser)
    expect(response.email).toBe(testUser.email)
    testUser = response
  })

  // promote user to admin role
  it("should return message: User promoted to admin successfully", async () => {
    await promoteToAdmin(testUser)
  })

  // test model get user by email
  it(`should return return user with first name: ${testUser.firstname}`, async () => {
    const response = await getUserByEmail(testUser.email)
    expect(response.firstname).toBe(testUser.firstname)
  })

  // test model get user by id
  it(`should return return user with first name: ${testUser.firstname}`, async () => {
    const response = await getUserById(testUser.id as unknown as number)
    expect(response.firstname).toBe(testUser.firstname)
  })

  // test model get all users
  it("should return an array of users", async () => {
    const response = await getAllUsers()
    expect(response).toBeInstanceOf(Array<User>)
  })
})

// test product models
describe("test product models", () => {
  // test model add new product
  it(`should return product with name: ${testProduct.name}`, async () => {
    const response = await createProduct(testProduct)
    expect(response.name).toBe(testProduct.name)
    testProduct = response
  })

  // test model get product by id
  it(`should return product with name: ${testProduct.name}`, async () => {
    const response = await getProductById(testProduct.id as unknown as number)
    expect(response.name).toBe(testProduct.name)
  })

  // test model get all products
  it("should return an array of products", async () => {
    const response = await getAllProducts()
    expect(response).toBeInstanceOf(Array<Product>)
  })

  // test model update product
  it("should return product with name: test2", async () => {
    const response = await updateProduct({
      id: testProduct.id,
      name: "test2",
      price: 200,
      category: "test2"
    })
    expect(response.name).toBe("test2")
    testProduct = response
  })
  
})

// test order models
describe("test order models", () => {
  // test model add new order
  it(`should return order with user_id: ${testUser.id}`, async () => {
    const response = await createOrder({
      user_id: testUser.id as unknown as number
    })
    expect(response.user_id).toBe(testUser.id as unknown as number)
    testOrder = response
  })
  
  // test model get order by id
  it(`should return order with user_id: ${testUser.id}`, async () => {
    const response = await getOrderById(testOrder.id as unknown as number)
    expect(response.user_id).toBe(testUser.id as unknown as number)
  })
  
  // test model get all orders
  it("should return an array of orders", async () => {
    const response = await getAllOrders()
    expect(response).toBeInstanceOf(Array<Order>)
  })
  
  // test model update order
  it("should returnorder with status: completed", async () => {
    const response = await updateOrder({
      id: testOrder.id,
      user_id: testOrder.user_id,
      status: "completed"
    })
    expect(response.status).toBe("completed")
    testOrder = response
  })

  // test model get orders by user id
  it("should return an array of orders", async () => {
    const response = await getOrdersByUserId(testUser.id as unknown as number)
    expect(response).toBeInstanceOf(Array<Order>)
  })
})

// test order product models
describe("test order product models", () => {

  // test model add new order product
  it(`should return order product with order_id: ${testOrder.id}`, async () => {
    const response = await createOrderProduct({
      order_id: testOrder.id as unknown as number,
      product_id: testProduct.id as unknown as number,
      quantity: 1,
      price: testProduct.price as unknown as number
      })
    expect(response.order_id).toBe(testOrder.id as unknown as number)
    testOrderProduct = response
  })

  // test model get order product by id
  it(`should return order product with order_id: ${testOrder.id}`, async () => {
    const response = await getOrderProductById(testOrderProduct.id as unknown as number)
    expect(response.order_id).toBe(testOrder.id as unknown as number)
  })

  // test model get all order products
  it("should return an array of order products", async () => {
    const response = await getAllOrderProducts()
    expect(response).toBeInstanceOf(Array<OrderProduct>)
  })

  // test model update order product
  it(`should return order product with order_id: ${testOrder.id}`, async () => {
    const response = await updateOrderProduct({
      id: testOrderProduct.id as unknown as number,
      order_id: testOrderProduct.order_id as unknown as number,
      product_id: testOrderProduct.product_id as unknown as number,
      quantity: 2,
      price: testProduct.price as unknown as number
    })
    expect(response.price).toBe(Number(testOrder.id))
  })

  // test model get user order products
  it("should return an array of order products", async () => {
    const response = await getUserOrderProducts(testUser.id as unknown as number)
    expect(response).toBeInstanceOf(Array<OrderProduct>)
  })

  // test model delete order product
  it(`should return order product with order_id: ${testOrder.id}`, async () => {
    const response = await deleteOrderProduct(Number(testOrderProduct.id))
    expect(response.order_id).toBe(Number(testOrder.id))
  })
})


// test delete user models
describe("test delete user models", () => {
  
  // test model delete user
  it(`should return user with id: ${testUser.id}`, async () => {
    const response = await deleteUser(testUser.id as unknown as number)
    expect(response.id).toBe(testUser.id)
  })

  // test model delete order
  it(`should return order with id: ${testOrder.id}`, async () => {
    const response = await deleteOrder(testOrder.id as unknown as number)
    expect(response.id).toBe(testOrder.id as unknown as number)
  })

  // test model delete product
  it(`should return product with id: ${testProduct.id}`, async () => {
    const response = await deleteProduct(testProduct.id as unknown as number)
    expect(response.id).toBe(testProduct.id)
  })

})


