CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    order_id integer NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);