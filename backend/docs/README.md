# RESTAPI Docs

This is REST API documentation for fullstack-test, you can read this documentation to know how to use this API. This API using nodejs, expressjs, postgresql, sequelize, and jest, you can clone this repo and run this app in your local machine. make sure you have installed nodejs and postgresql in your local machine.

If you want to hit this API, you can use browser, thunderclient or postman. This API using port 3000, so you can hit this API with `http://localhost:3000/{endpoint}`

## Product Endpoints

- [Create Product](product/post.md) : `POST /api/products/`
- [List Product](product/get.md) : `GET /api/products/`
- [Detail Product By Id](product/get-detail.md) : `GET /api/products/:id`
- [Update Product ](product/put.md) : `PUT /api/products/:id`
- [Delete Product ](product/delete.md) : `DELETE /api/products/:id`

## Order Endpoints

- [Create Order](order/post.md) : `POST /api/orders/`
- [List Order](order/get.md) : `GET /api/orders/`
- [Detail Order](order/get-detail.md) : `GET /api/orders/:id`
