create TABLE person(
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   surname VARCHAR(255)
);

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