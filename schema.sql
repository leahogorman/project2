-- DROP DATABASE CHAT_DATA;
CREATE DATABASE users;
USE users;


CREATE TABLE `users`(
    `id` int(11) NOT NULL AUTO_INCREMENT, 
    `name` varchar(255) NOT NULL, 
    `username` varchar(255) NOT NULL, 
    `password` varchar(255) NOT NULL, 
    `created_at` datetime NOT NULL, 
    `updated_at` datetime NOT NULL, 
    PRIMARY KEY (`id`)) 
    