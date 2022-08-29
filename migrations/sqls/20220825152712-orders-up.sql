CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    user_id integer NOT NULL,
    status varchar(10) NOT NULL DEFAULT 'active',
    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
            REFERENCES users (id) ON DELETE CASCADE
);
