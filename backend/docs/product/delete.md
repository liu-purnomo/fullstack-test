# Delete Product API

### Back to [Endpoint Lists](../README.md)

Delete product.

**URL** : `/api/products/:id`

**Method** : `DELETE`

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
  "message": "Product deleted successfully"
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
