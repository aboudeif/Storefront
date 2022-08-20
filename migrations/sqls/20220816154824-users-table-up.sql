
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(25) NOT NULL,
    email VARCHAR(75) NOT NULL UNIQUE,
    password VARCHAR(64) NOT NULL,
    role varchar(5) NOT NULL DEFAULT 'user'
);