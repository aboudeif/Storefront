CREATE TABLE order_products (
    id SERIAL PRIMARY KEY,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    order_id integer NOT NULL,
    CONSTRAINT fk_order
        FOREIGN KEY (order_id) 
            REFERENCES orders (id) ON DELETE CASCADE,
    CONSTRAINT fk_product
        FOREIGN KEY (product_id) 
            REFERENCES products (id) ON DELETE CASCADE
);