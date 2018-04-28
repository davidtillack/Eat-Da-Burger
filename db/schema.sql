CREATE DATABASE burgers_db;
USE burgers_db;
CREATE table burgers
(
  id int NOT NULL
  AUTO_INCREMENT,
	burger_name VARCHAR
  (255) NOT NULL,
  devoured BOOLEAN NOT NULL,	
	PRIMARY KEY
  (id)
);