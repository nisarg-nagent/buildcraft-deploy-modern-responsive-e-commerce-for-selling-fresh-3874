```sql
CREATE TABLE Categories (
  categoryId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Products (
  productId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  categoryId UUID REFERENCES Categories(categoryId),
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  availability BOOLEAN NOT NULL,
  imageUrl TEXT
);

CREATE INDEX idx_product_name ON Products(name);

CREATE TABLE Users (
  userId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(50) NOT NULL
);

CREATE TABLE Orders (
  orderId UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  userId UUID REFERENCES Users(userId),
  orderDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  totalAmount DECIMAL(10, 2) NOT NULL,
  status VARCHAR(50) NOT NULL
);

CREATE INDEX idx_order_user ON Orders(userId);
```