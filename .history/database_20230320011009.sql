create TABLE person(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   surname VARCHAR(255)
);

create TABLE post(
   id SERIAL PRIMARY KEY,
   content VARCHAR(255),
   title VARCHAR(255),
   user_name INTEGER,
   FOREIGN KEY (user_name) REFERENCES person (name),
   scanned_in date
);