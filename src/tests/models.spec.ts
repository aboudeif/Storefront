import { User } from './../models/user.model';
import client from "../database";
import { User, createUser, getAllUsers, getUserByEmail, promoteToAdmin, deleteUser } from "../models/user.model";
import { Order, createOrder, getOrderById, getAllOrders, updateOrder, getOrdersByUserId, deleteOrder } from "../models/order.model";
import { Product, createProduct, getProductById, getAllProducts, updateProduct, deleteProduct } from "../models/product.model";
import { OrderProduct, createOrderProduct, getOrderProductById, getAllOrderProducts, updateOrderProduct, deleteOrderProduct, getUserProductOrders } from "../models/order_product.model";


let testUser: User = {
  firstname: "test",
  lastname: "test",
  password: "test123",
  email: "test@test.com"
}
let testProduct: Product = {
  name: "test",
  price: 100,
  category: "test",
}
let testOrder: Order
let testOrderProduct: OrderProduct

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
    const response = await getUserByEmail(testUser.email)
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
  it("should return product with name: Product created successfully", async () => {
    const response = await createProduct(testProduct)
    expect(response).toBe("Product created successfully")
    testProduct = response.product
  })

  // test model get product by id
  it("should return return message: Product retrieved successfully", async () => {
    const response = await getProductById(testProduct.id)
    expect(response.message).toBe("Product retrieved successfully")
  })

  // test model get all products
  it("should return return message: All products retrieved successfully", async () => {
    const response = await getAllProducts()
    expect(response.message).toBe("All products retrieved successfully")
  })

  // test model update product
  it("should return message: Product updated successfully", async () => {
    const response = await updateProduct(testProduct.id, {
      name: "test2",
      price: 200,
      category: "test2"
    })
    expect(response.message).toBe("Product updated successfully")
  })

})

// test order models
describe("test order models", () => {
  // test model add new order
  it("should return message: Order created successfully", async () => {
    const response = await createOrder(testUser.id)
    expect(response.message).toBe("Order created successfully")
    testOrder = response.order
  })
  
  // test model get order by id
  it("should return return message: Order retrieved successfully", async () => {
    const response = await getOrderById(testOrder.id)
    expect(response.message).toBe("Order retrieved successfully")
  })
  
  // test model get all orders
  it("should return return message: All orders retrieved successfully", async () => {
    const response = await getAllOrders()
    expect(response.message).toBe("All orders retrieved successfully")
  })
  
  // test model update order
  it("should return message: Order updated successfully", async () => {
    const response = await updateOrder(testOrder.id, {
      status: "test"
    })
    expect(response.message).toBe("Order updated successfully")
  })

  // test model get orders by user id
  it("should return return message: Orders retrieved successfully", async () => {
    const response = await getOrdersByUserId(testUser.id)
    expect(response.message).toBe("Orders retrieved successfully")
  })
})

// test order product models
describe("test order product models", () => {

  // test model add new order product
  it("should return message: Order product created successfully", async () => {
    const response = await createOrderProduct(testOrder.id, testProduct.id)
    expect(response.message).toBe("Order product created successfully")
    testOrderProduct = response.orderProduct
  }),

  // test model get order product by id
  it("should return return message: Order product retrieved successfully", async () => {
    const response = await getOrderProductById(testOrderProduct.id)
    expect(response.message).toBe("Order product retrieved successfully")
  }),

  // test model get all order products
  it("should return return message: All order products retrieved successfully", async () => {
    const response = await getAllOrderProducts()
    expect(response.message).toBe("All order products retrieved successfully")
  }),

  // test model update order product
  it("should return message: Order product updated successfully", async () => {
    const response = await updateOrderProduct(testOrderProduct.id, {
      quantity: 2
    })
    expect(response.message).toBe("Order product updated successfully")
  }),

  // test model get user product orders
  it("should return return message: User product orders retrieved successfully", async () => {
    const response = await getUserProductOrders(testUser.id)
    expect(response.message).toBe("User product orders retrieved successfully")
  }),

  // test model delete order product
  it("should return message: Order product deleted successfully", async () => {
    const response = await deleteOrderProduct(testOrderProduct.id)
    expect(response.message).toBe("Order product deleted successfully")
  })
}),


// test delete user models
describe("test delete user models", () => {

  // test model delete user
  it("should return message: User deleted successfully", async () => {
    const response = await deleteUser(testUser.id)
    expect(response.message).toBe("User deleted successfully")
  }),

  // test model delete order
  it("should return message: Order deleted successfully", async () => {
    const response = await deleteOrder(testOrder.id)
    expect(response.message).toBe("Order deleted successfully")
  }),

  // test model delete product
  it("should return message: Product deleted successfully", async () => {
    const response = await deleteProduct(testProduct.id)
    expect(response.message).toBe("Product deleted successfully")
  })
})