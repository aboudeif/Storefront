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

## Ports
- Project web server works on port 3000 as provided in .env file
- Postgres database works on port 5432 as provided in .env file

### Installation Instructions

1. clone this repo on your local machine

`https://github.com/aboudeif/Storefront.git`
2. open 'Storefront' director

` cd Storefront`

3. install pakages

`yarn install` or `npm i`

4. create postgres database docker container using the *docker-compose.yml* or open current postgres database

`psql -U postgres`

5. create postgresql user

`CREATE USER store_admin WITH PASSWORD 'dataPassword';`

6. create a database with name *store*

`CREATE DATABASE store;`

7. grant all privileges for user on database

`\c store`

`GRANT ALL PRIVILEGES ON DATABASE store TO store_admin;`

8. set .env file


create .env file in the root directory of project with the values bloew:

`
NODE_ENV=dev
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=store_admin
POSTGRES_PASSWORD=dataPassword
POSTGRES_DB=store

BCRYPT_ROUNDS=10
BCRYPT_PASSWORD_PAPER_KEY=storePaperKey
JWT_SECRET=storeSecret

SERVER_PORT=3000

`


9. migrate database

`npm install -g db-migrate`

`db-migrate up`


### Run Project Server
run web server
`npm run watch` or `yarn watch`

### Test Project
test all project endpoints
`npm run test`
