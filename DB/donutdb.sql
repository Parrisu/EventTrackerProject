-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema donutdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `donutdb` ;

-- -----------------------------------------------------
-- Schema donutdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `donutdb` DEFAULT CHARACTER SET utf8 ;
USE `donutdb` ;

-- -----------------------------------------------------
-- Table `store`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `store` ;

CREATE TABLE IF NOT EXISTS `store` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `location` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `donut`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `donut` ;

CREATE TABLE IF NOT EXISTS `donut` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(50) NOT NULL,
  `price` DECIMAL(3,2) NULL DEFAULT '0.00',
  `calories` INT(255) NOT NULL DEFAULT '100',
  `enabled` TINYINT(1) NOT NULL DEFAULT '1',
  `store_id` INT(11) NOT NULL,
  `create_date` DATE NULL DEFAULT NULL,
  `last_update` DATE NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_donut_store` (`store_id` ASC),
  CONSTRAINT `fk_donut_store`
    FOREIGN KEY (`store_id`)
    REFERENCES `store` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 18
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS eater@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eater'@'localhost' IDENTIFIED BY 'eater';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eater'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `store`
-- -----------------------------------------------------
START TRANSACTION;
USE `donutdb`;
INSERT INTO `store` (`id`, `name`, `location`) VALUES (1, 'Rolling Pin', 'Camarillo');
INSERT INTO `store` (`id`, `name`, `location`) VALUES (2, 'Fostars Family Donuts', 'Camarillo');

COMMIT;


-- -----------------------------------------------------
-- Data for table `donut`
-- -----------------------------------------------------
START TRANSACTION;
USE `donutdb`;
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (1, 'Glazed Donut', 2.49, 240, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (2, 'Cronut Donut', 2.49, 352, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (3, 'Cake Donut', 2.49, 130, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (4, 'Powdered Sugar Donut Holes', 2.49, 200, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (5, 'Birthday Donut', 4.75, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (6, 'Number Donut', 4.75, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (7, 'Jumbo Donut', 4.75, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (8, 'Jelly Donut', 3.50, 520, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (9, 'Fancy Donut', 5.50, 230, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (10, 'Cake Donut Holes', 3.00, 240, 1, 1, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (11, 'Chocolate Sprinkles Donut', 0.85, 180, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (12, 'White Gloss Donut', 1.25, 280, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (13, 'Powdered Glaze Donut', 0.98, 210, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (14, 'Chocolate Fluff Donut', 2.25, 380, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (15, 'Macademia Nut Twist Donut', 2.25, 310, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (16, 'Soft Glaze Twist Donut', 2.25, 190, 1, 2, '2024-01-05', '2024-01-05');
INSERT INTO `donut` (`id`, `name`, `price`, `calories`, `enabled`, `store_id`, `create_date`, `last_update`) VALUES (17, 'Jelly Cake Ball', 4.25, 450, 1, 2, '2024-01-05', '2024-01-05');

COMMIT;

