--Create burgers_db database--
CREATE DATABASE burgers_db;

--Use the burgers_db database--
USE burgers_db;

--Create burgers table--

CREATE TABLE burgers (
    id INT NOT NULL, AUTO_INCREMENT,
    burger_name VARCHAR(200) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);