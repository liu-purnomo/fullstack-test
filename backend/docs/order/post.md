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
  "message": "Order created successfully",
  "order": {
    "id": "number",
    "product_order_id": "number",
    "product_order": [
      {
        "product_id": "number",
        "quantity": "number",
        "product": {
          "id": "number",
          "name": "string",
          "description": "string",
          "price": "number",
          "price": "number",
          "image_url": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      },
      {
        "product_id": "number",
        "quantity": "number",
        "price": "number",
        "product": {
          "id": "number",
          "name": "string",
          "description": "string",
          "price": "number",
          "image_url": "string",
          "created_at": "string",
          "updated_at": "string"
        }
      }
    ],
    "customer_name": "string",
    "created_at": "string",
    "updated_at": "string"
  }
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
  "message": "Product not found"
}
```

**Status** : `500 Internal Server Error`

```json
{
  "message": "Internal Server Error"
}
```

### Back to [Endpoint Lists](../README.md)
