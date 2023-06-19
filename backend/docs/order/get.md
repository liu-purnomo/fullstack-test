## Get List Order

### Back to [Endpoint Lists](../README.md)

Get detail order by id

**URL** : `/api/orders`

**Method** : `GET`

## Success Response

**Status** : `200 OK`

**Body** :

```json
[
  {
    "id": "number",
    "total_price": "number",
    "customer_id": "number",
    "createdAt": "timestamp",
    "updatedAt": "timestamp",
    "Customer": {
      "id": "number",
      "name": "string",
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    },
    "ProductOrders": [
      {
        "id": "number",
        "product_id": "number",
        "order_id": "number",
        "quantity": "number",
        "price": "number",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "Product": {
          "id": "number",
          "name": "string",
          "description": "string",
          "price": "number",
          "image_url": "string",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
      },
      {
        "id": "number",
        "product_id": "number",
        "order_id": "number",
        "quantity": "number",
        "price": "number",
        "createdAt": "timestamp",
        "updatedAt": "timestamp",
        "Product": {
          "id": "number",
          "name": "string",
          "description": "string",
          "price": "number",
          "image_url": "string",
          "createdAt": "timestamp",
          "updatedAt": "timestamp"
        }
      }
    ]
  }
]
```

## Error Response

**Status** : `500 Internal Server Error`

```json
{
  "message": "Internal Server Error"
}
```

### Back to [Endpoint Lists](../README.md)
