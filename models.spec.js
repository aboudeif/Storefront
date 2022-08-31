"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("./src/models/user.model");
const order_model_1 = require("./src/models/order.model");
const product_model_1 = require("./src/models/product.model");
const order_product_model_1 = require("./src/models/order_product.model");
let testUser = {
    firstname: "test",
    lastname: "test",
    password: "test123",
    email: "test@test.com"
};
let testProduct = {
    name: "test",
    price: 100,
    category: "test",
};
let testOrder;
let testOrderProduct;
// test user models
describe("test user models", () => {
    // test model register new user
    it(`should return user with email: ${testUser.email}`, async () => {
        const response = await (0, user_model_1.createUser)(testUser);
        expect(response.email).toBe(testUser.email);
        testUser = response;
    });
    // promote user to admin role
    it("should return message: User promoted to admin successfully", async () => {
        await (0, user_model_1.promoteToAdmin)(testUser);
    });
    // test model get user by email
    it(`should return return user with first name: ${testUser.firstname}`, async () => {
        const response = await (0, user_model_1.getUserByEmail)(testUser.email);
        expect(response.firstname).toBe(testUser.firstname);
    });
    // test model get user by id
    it(`should return return user with first name: ${testUser.firstname}`, async () => {
        const response = await (0, user_model_1.getUserById)(testUser.id);
        expect(response.firstname).toBe(testUser.firstname);
    });
    // test model get all users
    it("should return an array of users", async () => {
        const response = await (0, user_model_1.getAllUsers)();
        expect(response).toBeInstanceOf((Array));
    });
});
// test product models
describe("test product models", () => {
    // test model add new product
    it(`should return product with name: ${testProduct.name}`, async () => {
        const response = await (0, product_model_1.createProduct)(testProduct);
        expect(response.name).toBe(testProduct.name);
        testProduct = response;
    });
    // test model get product by id
    it(`should return product with name: ${testProduct.name}`, async () => {
        const response = await (0, product_model_1.getProductById)(testProduct.id);
        expect(response.name).toBe(testProduct.name);
    });
    // test model get all products
    it("should return an array of products", async () => {
        const response = await (0, product_model_1.getAllProducts)();
        expect(response).toBeInstanceOf((Array));
    });
    // test model update product
    it("should return product with name: test2", async () => {
        const response = await (0, product_model_1.updateProduct)({
            id: testProduct.id,
            name: "test2",
            price: 200,
            category: "test2"
        });
        expect(response.name).toBe("test2");
        testProduct = response;
    });
});
// test order models
describe("test order models", () => {
    // test model add new order
    it(`should return order with user_id: ${testUser.id}`, async () => {
        const response = await (0, order_model_1.createOrder)({
            user_id: testUser.id
        });
        expect(response.user_id).toBe(testUser.id);
        testOrder = response;
    });
    // test model get order by id
    it(`should return order with user_id: ${testUser.id}`, async () => {
        const response = await (0, order_model_1.getOrderById)(testOrder.id);
        expect(response.user_id).toBe(testUser.id);
    });
    // test model get all orders
    it("should return an array of orders", async () => {
        const response = await (0, order_model_1.getAllOrders)();
        expect(response).toBeInstanceOf((Array));
    });
    // test model update order
    it("should returnorder with status: completed", async () => {
        const response = await (0, order_model_1.updateOrder)({
            id: testOrder.id,
            user_id: testOrder.user_id,
            status: "completed"
        });
        expect(response.status).toBe("completed");
        testOrder = response;
    });
    // test model get orders by user id
    it("should return an array of orders", async () => {
        const response = await (0, order_model_1.getOrdersByUserId)(testUser.id);
        expect(response).toBeInstanceOf((Array));
    });
});
// test order product models
describe("test order product models", () => {
    // test model add new order product
    it(`should return order product with order_id: ${testOrder.id}`, async () => {
        const response = await (0, order_product_model_1.createOrderProduct)({
            order_id: testOrder.id,
            product_id: testProduct.id,
            quantity: 1,
            price: testProduct.price
        });
        expect(response.order_id).toBe(testOrder.id);
        testOrderProduct = response;
    }),
        // test model get order product by id
        it(`should return order product with order_id: ${testOrder.id}`, async () => {
            const response = await (0, order_product_model_1.getOrderProductById)(testOrderProduct.id);
            expect(response.order_id).toBe(testOrder.id);
        }),
        // test model get all order products
        it("should return an array of order products", async () => {
            const response = await (0, order_product_model_1.getAllOrderProducts)();
            expect(response).toBeInstanceOf((Array));
        }),
        // test model update order product
        it(`should return order product with order_id: ${testOrder.id}`, async () => {
            const response = await (0, order_product_model_1.updateOrderProduct)({
                id: testOrderProduct.id,
                order_id: testOrderProduct.order_id,
                product_id: testOrderProduct.product_id,
                quantity: 2,
                price: testProduct.price
            });
            expect(response.price).toBe(Number(testOrder.id));
        }),
        // test model get user order products
        it("should return an array of order products", async () => {
            const response = await (0, order_product_model_1.getUserOrderProducts)(Number(testUser.id));
            expect(response).toBeInstanceOf((Array));
        }),
        // test model delete order product
        it(`should return order product with order_id: ${testOrder.id}`, async () => {
            const response = await (0, order_product_model_1.deleteOrderProduct)(Number(testOrderProduct.id));
            expect(response.order_id).toBe(Number(testOrder.id));
        });
});
// test delete user models
describe("test delete user models", () => {
    // test model delete user
    it(`should return user with id: ${testUser.id}`, async () => {
        const response = await (0, user_model_1.deleteUser)(testUser.id);
        expect(response.id).toBe(testUser.id);
    }),
        // test model delete order
        it(`should return order with id: ${testOrder.id}`, async () => {
            const response = await (0, order_model_1.deleteOrder)(testOrder.id);
            expect(response.id).toBe(testOrder.id);
        }),
        // test model delete product
        it(`should return product with id: ${testProduct.id}`, async () => {
            const response = await (0, product_model_1.deleteProduct)(testProduct.id);
            expect(response.id).toBe(testProduct.id);
        });
});
