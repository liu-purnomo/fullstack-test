## Create Order API

### Back to [Endpoint Lists](../README.md)

Create a new order.

**URL** : `/api/orders`

**Method** : `POST`

## Request Body

```json
{
  "product_order": [
    {
      "product_id": "number, required",
      "quantity": "number, required"
    },
    {
      "product_id": "number, required",
      "quantity": "number, required"
    },
    ...
  ],
  "customer_name": "string, required"
}
```

## Success Response

**Status** : `201 Created`

**Body** :

```json
{
  "customer_name": "string",
  "total_price": "number",
  "order": [
    {
      "id": "number",
      "product_id": "number",
      "order_id": "number",
      "quantity": "number",
      "price": "number",
      "createdAt": "2023-06-17T20:26:04.464Z",
      "updatedAt": "2023-06-17T20:26:04.464Z"
    },
    {
      "id": "number",
      "product_id": "number",
      "order_id": "number",
      "quantity": "number",
      "price": "number",
      "createdAt": "2023-06-17T20:26:04.464Z",
      "updatedAt": "2023-06-17T20:26:04.464Z"
    },
    ...
  ],
}
```

## Error Response

**Status** : `400 Bad Request`

**Body** :

```json
{
  "message": "Product id is required"
}
```

**Or**

```json
{
  "message": "Product quantity is required"
}
```

**Or**

```json
{
  "message": "Customer name is required"
}
```

**Status** : `404 Not Found`

```json
{
  "message": "Data not found"
}
```

**Status** : `500 Internal Server Error`

```json
{
  "message": "Internal Server Error"
}
```

### Back to [Endpoint Lists](../README.md)
