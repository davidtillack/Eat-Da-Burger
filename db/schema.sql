CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
  ID INT NOT NULL,
  burger_name VARCHAR (100) NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY (ID)
);