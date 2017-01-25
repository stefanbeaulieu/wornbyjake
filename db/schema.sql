CREATE DATABASE wornbyjake;
USE wornbyjake;

CREATE TABLE user {
    id int NOT NULL AUTO_INCREMENT,
    name varchar(100) NOT NULL,
    username varchar(100) NOT NULL,
    email varchar(254) NOT NULL,
    password varchar(100) NOT NULL,
    company_name varchar(100),
    logo LONGBLOB,
    phone_number bigint NOT NULL,
    profile_desc varchar(255),
    PRIMARY KEY (id)
},

CREATE TABLE product {
    id int NOT NULL AUTO_INCREMENT,
    prod_name varchar(100) NOT NULL,
    prod_desc varchar(255) NOT NULL,
    prod_cat varchar(100) NOT NULL,
    prod_price decimal(10,2) NOT NULL,
    prod_pic1 LONGBLOB NOT NULL,
    prod_pic2 LONGBLOB,
    prod_pic3 LONGBLOB,
    prod_pic4 LONGBLOB,
    prod_pic5 LONGBLOB,
    prod_pic6 LONGBLOB,
    prod_trade varchar(100) NOT NULL
}
