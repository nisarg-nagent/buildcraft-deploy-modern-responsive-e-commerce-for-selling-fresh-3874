# System Architecture

## Pattern: microservices

### Architecture Diagram
```
Frontend <--> API Gateway <--> { Product Service, Order Service, Auth Service } <--> Database/Cache/Queue
```

### Data Flow
1. Step 1: User sends request via frontend
2. Step 2: API Gateway forwards to relevant service
3. Step 3: Service processes request using database/cache/queue
4. Step 4: Service responds back to frontend through API Gateway

## API contracts

**Base path**: `/api`  
**Version**: 1.0

| Method | Path | Summary | Auth |
|--------|------|---------|------|
| GET | `/products` | Fetch products with optional filters | none |
| GET | `/products/:productId` | Fetch specific product details | none |
| POST | `/cart` | Add product to cart | bearer |
| POST | `/orders` | Create order | bearer |
| POST | `/admin/products` | Create a new product | bearer |
| GET | `/admin/dashboard` | Fetch admin analytics | bearer |

### Endpoint details

#### `GET /products`

*Fetch products with optional filters*

**Request body**

```json
{}
```

**Query parameters**

| Name | Type | Required |
|------|------|----------|
| category | string | no |
| search | string | no |
| limit | number | no |

**Responses**

- **200**: List of products
- **400**: Invalid query parameters

#### `GET /products/:productId`

*Fetch specific product details*

**Request body**

```json
{}
```

**Responses**

- **200**: Product details
- **404**: Product not found

#### `POST /cart`

*Add product to cart*

**Request body**

```json
{
  "userId": "string",
  "productId": "string",
  "quantity": "number"
}
```

**Responses**

- **200**: Product added to cart
- **400**: Invalid product ID

#### `POST /orders`

*Create order*

**Request body**

```json
{
  "userId": "string",
  "cartId": "string"
}
```

**Responses**

- **201**: Order created
- **400**: Order creation failed

#### `POST /admin/products`

*Create a new product*

**Request body**

```json
{
  "name": "string",
  "categoryId": "string",
  "description": "string",
  "price": "number",
  "availability": "boolean",
  "imageUrl": "string"
}
```

**Responses**

- **201**: Product created
- **403**: Unauthorized access

#### `GET /admin/dashboard`

*Fetch admin analytics*

**Request body**

```json
{}
```

**Responses**

- **200**: Analytics data
- **403**: Unauthorized access

## Database overview

| Table | Description |
|-------|-------------|
| `Products` | Table containing all products |
| `Categories` | Table containing all product categories |
| `Users` | Table containing user information |
| `Orders` | Table containing order details |


## Infrastructure Components

| Component | Type | Technology | Purpose |
|-----------|------|------------|----------|
| PostgreSQL Database | database | PostgreSQL | Primary data store |
| Redis Cache | cache | Redis | Caching of frequently accessed data |
| RabbitMQ Queue | queue | RabbitMQ | Task delegation and processing |
