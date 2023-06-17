# Update Product API

### Back to [Endpoint Lists](../README.md)

Update product.

**URL** : `/api/products/:id`

**Method** : `PUT`

## Request Params

```json
{
  "id": "number, required"
}
```

## Request Body

```json
{
  "name": "string",
  "description": "string",
  "price": "number",
  "image_url": "string"
}
```

## Success Response

**Status** : `200 OK`

**Body** :

```json
{
  "message": "Product updated successfully"
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
