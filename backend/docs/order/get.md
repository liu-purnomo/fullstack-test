## Get Detail Order

### Back to [Endpoint Lists](../README.md)

Get detail order by id

**URL** : `/api/orders/:id`

**Method** : `GET`

## Request Params

```json
{
  "id": "number, required"
}
```

## Success Response

**Status** : `200 OK`

**Body** :

```json
{
  "order": {
    "id": "number",
    "product_order_id": "number",
    "ProductOrders": [
      {
        "id": "number",
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
        "id": "number",
        "product_id": "number",
        "quantity": "number",
        "price": "number",
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
      ...
    ],
    "customer_id": "string",
    "Customer": {
        "id": "number",
        "name": "string",
    },
    "created_at": "string",
    "updated_at": "string"
  }
}
```

## Error Response

**Status** : `404 Not Found`

**Body** :

```json
{
  "message": "Order not found"
}
```

**Status** : `500 Internal Server Error`

```json
{
  "message": "Internal Server Error"
}
```

### Back to [Endpoint Lists](../README.md)
