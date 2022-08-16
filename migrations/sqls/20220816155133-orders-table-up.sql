CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);