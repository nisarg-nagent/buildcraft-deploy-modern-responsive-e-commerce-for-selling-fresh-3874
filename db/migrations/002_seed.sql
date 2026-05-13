```sql
INSERT INTO Categories (name) VALUES ('Vegetables'), ('Fruits');

INSERT INTO Products (name, categoryId, description, price, availability, imageUrl) VALUES
('Apple', (SELECT categoryId FROM Categories WHERE name='Fruits'), 'Fresh apples', 0.50, TRUE, 'https://example.com/apple.jpg'),
('Banana', (SELECT categoryId FROM Categories WHERE name='Fruits'), 'Fresh bananas', 0.30, TRUE, 'https://example.com/banana.jpg'),
('Carrot', (SELECT categoryId FROM Categories WHERE name='Vegetables'), 'Fresh carrots', 0.20, TRUE, 'https://example.com/carrot.jpg');

INSERT INTO Users (username, password, email, role) VALUES
('admin', 'hashedpassword', 'admin@example.com', 'admin'),
('customer', 'hashedpassword', 'customer@example.com', 'customer');

INSERT INTO Orders (userId, orderDate, totalAmount, status) VALUES
((SELECT userId FROM Users WHERE username='customer'), CURRENT_TIMESTAMP, 20.00, 'pending');
```