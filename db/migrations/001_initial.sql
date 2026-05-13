-- Generated SQL for postgresql

CREATE TYPE order_status AS ENUM ('pending', 'completed', 'shipped', 'cancelled');

CREATE TABLE Products (
  productId UUID PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL,
  categoryId UUID NOT NULL REFERENCES Categories(categoryId),
  description TEXT,
  price DECIMAL(10,2) NOT NULL,
  availability BOOLEAN NOT NULL,
  imageUrl TEXT
);

CREATE INDEX idx_product_name ON Products(name);

CREATE TABLE Categories (
  categoryId UUID PRIMARY KEY NOT NULL UNIQUE,
  name VARCHAR(255) NOT NULL
);

CREATE UNIQUE INDEX idx_category_name ON Categories(name);

CREATE TABLE Users (
  userId UUID PRIMARY KEY NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL,
  password TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL
);

CREATE UNIQUE INDEX idx_user_email ON Users(email);

CREATE TABLE Orders (
  orderId UUID PRIMARY KEY NOT NULL UNIQUE,
  userId UUID NOT NULL REFERENCES Users(userId),
  orderDate TIMESTAMP NOT NULL DEFAULT 'CURRENT_TIMESTAMP',
  totalAmount DECIMAL(10,2) NOT NULL,
  status VARCHAR(50) NOT NULL
);

CREATE INDEX idx_order_user ON Orders(userId);

