# Storefront Backend Project

## Getting Started

This repo contains a basic Node and Express app to get you started in constructing an API. To get started, clone this repo and run `yarn` in your terminal at the project root.

## Required Technologies

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing

### Database tables:

- Table: user(id: serial integer [primary key], firstName:varchar, lastName:varchar, email:varchar, password:varchar, role:varchar [default=user])

- Table: products(id: serial integer [primary key], name:varchar, price:decimal, category:varchar, is_available:boolean [default=true])

-Table: orders(id: serial integer [primary key], product_id integer [foreign key to product table], quantity:integer, user_id integer [foreign key to user table], total_price:decimal, status:varchar[default=active])

## Setup and connect to the database:


### 4. Express Handlers

Set up the Express handlers to route incoming requests to the correct model method. Make sure that the endpoints you create match up with the enpoints listed in `REQUIREMENTS.md`. Endpoints must have tests and be CORS enabled. 

### 5. JWTs

Add JWT functionality as shown in the course. Make sure that JWTs are required for the routes listed in `REQUIUREMENTS.md`.

### 6. QA and `README.md`

Before submitting, make sure that your project is complete with a `README.md`. Your `README.md` must include instructions for setting up and running your project including how you setup, run, and connect to your database. 

Before submitting your project, spin it up and test each endpoint. If each one responds with data that matches the data shapes from the `REQUIREMENTS.md`, it is ready for submission!
