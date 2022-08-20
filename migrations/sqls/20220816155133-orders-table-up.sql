CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    user_id integer NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    status varchar(10) NOT NULL DEFAULT 'active',
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);