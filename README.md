# Table Postgresql

CREATE TABLE students (id SERIAL PRIMARY KEY, name TEXT);
INSERT INTO students (name) VALUES ('Elie');
INSERT INTO students (name) VALUES ('Michael');
INSERT INTO students (name) VALUES ('Joel');
INSERT INTO students (name) VALUES ('Matt');
\q