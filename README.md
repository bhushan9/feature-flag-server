# Feature Flag Server

## Routes

### Required Headers

These are the headers that are required for calls to be made:

- Authentication: Bearer {string: token} *(comes from SSO token manager such as took)*
- Environment: {string: env} *(env represents one of these enums: develop | qa | staging | prod)*

### Common Path Fields

- version: /v{integer: x}/ *(where x represents the major version of the application)*

An example path would look like: `/v1/`

### Common Query Params

Here are the various params that can be appended to a path that are common amoung `GET` method end points.

- orderByField: {field} *(fields can be something like createdAt, etc., from the DB)*
- orderByDirection: {string: direction} *(direction is an enum of either: asc | desc)*
- status: {string: state} *(state is one of these enums: created | updated | deleted)*

The key names are as listed. An example path could look like this: `/v1/?orderByField=id&orderByDirection=asc&status=deleted`

## List of Features

### Method

GET

### Path

/

### Returns

An array of Flag objects:

```json
{"body": []}
```

## Create a Feature

### Method

POST

### Body

A new flag with these base fields:

```json
{
    "name": "it's a flag!",
    "value": true
}
```

### Path

/

### Returns

A new flag object in the shape of:

```json
{
    "body": {
        "id": 1234,
        "name": "it's a flag!",
        "value": true,
        "created_at": "timestamp",
        "updated_at": "timestamp"
    }
}
```

## Update a Feature

### Method

PUT

### Body

Flag object fields we want to update

```json
{
    "value": false
}
```

### Path

/{flagID}

### Returns

An updated flag object in the shape of:

```json
{
    "body": {
        "id": 1234,
        "name": "it's a flag!",
        "value": true,
        "created_at": "timestamp",
        "updated_at": "timestamp"
    }
}
```

## Delete a feature

### Method

DELETE

### Path

/{flagID}

### Returns

A deleted flag object in the shape of:

```json
{
    "body": {
        "id": 1234,
        "name": "it's a flag!",
        "value": true,
        "created_at": "timestamp",
        "updated_at": "timestamp",
        "deleted_at": "timestamp"
    }
}
```

## Get a Feature

### Method

GET

### Path

/{flagID}

### Returns

A flag object in the shape of:

```json
{
    "body": {
        "id": 1234,
        "name": "it's a flag!",
        "value": true,
        "created_at": "timestamp",
        "updated_at": "timestamp",
        "deleted_at": "timestamp"
    }
}
```
