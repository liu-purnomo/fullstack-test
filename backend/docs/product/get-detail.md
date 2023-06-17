# Get List Product API

### Back to [Endpoint Lists](../README.md)

Get all product.

**URL** : `/api/products/:id`

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
  "id": "number",
  "name": "string",
  "description": "string",
  "price": "number",
  "image_url": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

## Error Response

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
