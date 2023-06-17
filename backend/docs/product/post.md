# Create Product API

### Back to [Endpoint Lists](../README.md)

Create a new product.

**URL** : `/api/products`

**Method** : `POST`

## Request Body

```json
{
  "name": "string, required",
  "description": "string, required",
  "price": "number, required",
  "image_url": "string, required"
}
```

## Success Response

**Status** : `201 Created`

**Body** :

```json
{
  "message": "Product created successfully"
}
```

## Error Response

**Status** : `400 Bad Request`

**Body** :

```json
{
  "message": "Product name is required"
}
```

**Or**

```json
{
  "message": "Product description is required"
}
```

**Or**

```json
{
  "message": "Product price is required"
}
```

**Or**

```json
{
  "message": "Product price must be number"
}
```

**Or**

```json
{
  "message": "Product image url is required"
}
```

**Status** : `500 Internal Server Error`

**Body** :

```json
{
  "message": "Internal Server Error"
}
```

### Back to [Endpoint Lists](../README.md)
