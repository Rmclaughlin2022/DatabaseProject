CREATE database HangPerson;
USE HangPerson;

CREATE TABLE Users (
	firstName CHAR(15)  NOT NULL,
    email CHAR(50)  NOT NULL,
	username CHAR(30)  NOT NULL,
    password CHAR(20) NOT NULL
);

