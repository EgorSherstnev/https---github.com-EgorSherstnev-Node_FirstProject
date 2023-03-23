create TABLE person(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   surname VARCHAR(255)
);

-- create TABLE post(
--    id SERIAL PRIMARY KEY,
--    content VARCHAR(255),
--    title VARCHAR(255),
--    user_id INTEGER,
--    FOREIGN KEY (user_id) REFERENCES person (id),
--    scanned_in date
-- );

CREATE Table contacts(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   link VARCHAR(255)
);

create TABLE post(
   id SERIAL PRIMARY KEY,
   text VARCHAR(255),
   title VARCHAR(255),
   author VARCHAR(255),
   scanned_in date
);