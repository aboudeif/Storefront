# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints

#### User:

- Login route: 'login/' [POST] [registerd user required]
- Register route: 'register/' [POST]
- Index route: 'product/' [GET] [token required] + [admin required]
- Show route: 'product/:id' (args: user id) [GET] [token required] + [admin required]

#### Product:

- Index route: 'product/' [GET] 
- Show route: 'product/:id' (args: product id) [GET]
- Create route: 'product/' [POST] [token required] + [admin required]
- Update route: 'product/:id' (args: product id) [PUT] [token required] + [admin required]
- Delete route: 'product/:id' (args: product id) [DELETE] [token required] + [admin required]

#### Order:

- Index route: 'order/' [GET] [token required] + [admin required]
- Show route: 'order/:id' (args: order id) [GET] [token required]
- Create route: 'order/' [POST]  [token required]
- Update route: 'order/:id' (args: order id) [PUT] [token required] + [Order Owner or admin required]
- Delete route: 'order/:id' (args: order id) [DELETE] [token required] + [Order Owner or admin required]

- Show orders of user route: 'order/user/:id' (args: user id) [GET]  [token required] + [Order Owner or admin required] or [admin required]

#### Order product:

- Index route: 'orderProduct/' [GET] [token required] + [admin required]
- Show route: 'orderProduct/:id' (args: orderProduct id) [GET] [token required] [Order Product Owner or admin required]
- Create route: 'orderProduct/' [POST]  [token required]
- Update route: 'orderProduct/:id' (args: orderProduct id) [PUT] [token required] + [Order Product Owner or admin required]
- Delete route: 'orderProduct/:id' (args: orderProduct id) [DELETE] [token required] + [Order Product Owner or admin required]

- Show order products of user route: 'orderProduct/user/:id' (args: user id) [GET]  [token required] + [Order Products Owner or admin required]

## Data Shape
#### Product
-  id: serial integer [primary key]
- name: varchar
- price:decimal
- category: varchar
- is_available: boolean [default=true]

#### User
- id: serial integer [primary key]
- firstName: varchar
- lastName: varchar
- email: varchar
- password: varchar
- role:varchar [default=user]

#### Orders
- id: serial integer [primary key]
- user_id integer [foreign key to user table]
- status: varchar [default=active]

#### Order Products
- id: serial integer [primary key]
- product_id integer [foreign key to product table]
- order_id integer [foreign key to order table]
- quantity: integer
- price: decimal
