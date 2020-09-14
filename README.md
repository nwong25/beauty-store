# Beauty Store

An online e-commerce store that sells beauty products.

https://beauty-store-project.herokuapp.com/products (WIP)

<img src="https://i.ibb.co/HV9xqZX/Screen-Shot-2020-09-13-at-10-59-46-PM.png" alt="Screen-Shot-2020-09-13-at-10-59-46-PM" border="0">

## Setup

To run project in development mode

* Run the following commands:

```
npm install
createdb beauty-store
npm run seed
npm run start-dev
```

For fake checkout - use 4242 4242 4242 4242 as credit card number

## Tech Stack

* Client Side
  * React
  * Redux
  * Sass
  
* Server
  * Node.js
  * Express
  * PostgreSQL
  * Sequelize
  * Stripe for checkout

## WIP Improvements

* Refactor to use React hooks
* Add unit testing for both server and front-end
* Add order history page
* Add pagination to products page
* Add admin page to edit and add new products to site
* Add customer account page to edit personal information
* Incorporate lazy loading
