CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers
(
  ID INTEGER NOT NULL IDENTITY(1,1),
  burger_name VARCHAR
  (100) NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY
  ("ID")
);