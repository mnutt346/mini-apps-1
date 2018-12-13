-- ---

-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'user_info'
-- 
-- ---
DROP DATABASE IF EXISTS checkout_db;

CREATE DATABASE checkout_db;

USE checkout_db;

DROP TABLE IF EXISTS `user_info`;
		
CREATE TABLE `user_info` (
  `id` INT AUTO_INCREMENT,
  `name` VARCHAR(40),
  `email` VARCHAR(40) UNIQUE,
  `password` VARCHAR(40),
  PRIMARY KEY (`id`),
KEY (`id`),
KEY (`id`)
);

-- ---
-- Table 'addresses'
-- 
-- ---

DROP TABLE IF EXISTS `addresses`;
		
CREATE TABLE `addresses` (
  `id` INT AUTO_INCREMENT,
  `street` VARCHAR(50),
  `city` VARCHAR(40),
  `state` VARCHAR(20),
  `zip` INT(15),
  `phone` VARCHAR(20),
  `user_id` INT,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'payment'
-- 
-- ---

DROP TABLE IF EXISTS `payment`;
		
CREATE TABLE `payment` (
  `id` INT AUTO_INCREMENT,
  `creditCard` VARCHAR(25),
  `expiration` VARCHAR(12),
  `CVV` INT(10),
  `zip` INT(15),
  `user_id` INT,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `addresses` ADD FOREIGN KEY (user_id) REFERENCES `user_info` (`id`);
ALTER TABLE `payment` ADD FOREIGN KEY (user_id) REFERENCES `user_info` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `user_info` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `addresses` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `payment` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `user_info` (`id`,`name`,`email`,`password`) VALUES
-- ('','','','');
-- INSERT INTO `addresses` (`id`,`street`,`city`,`state`,`zip`,`phone`,`user_id`) VALUES
-- ('','','','','','','');
-- INSERT INTO `payment` (`id`,`creditCard`,`expiration`,`CVV`,`zip`,`user_id`) VALUES
-- ('','','','','','');

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/