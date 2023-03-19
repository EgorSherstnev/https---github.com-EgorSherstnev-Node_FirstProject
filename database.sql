create TABLE post(
   id SERIAL PRIMARY KEY,
   title VARCHAR(255),
   content VARCHAR(255),
   user_id INTEGER,
   FOREIGN KEY (user_id) REFERENCES person (id),
   scanned_in date
);