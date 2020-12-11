-- CREATE TABLE IF NOT EXISTS startUps (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     companyName NOT NULL,
--     start_date DATE,
--     due_date DATE,
--     status TINYINT NOT NULL,
--     priority TINYINT NOT NULL,
--     description TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- )

CREATE DATABASE IF NOT EXISTS `radarAttempt2`;

USE `radarAttempt2`;

-- startUps is the parent table for everything

DROP TABLE IF EXISTS `startUps`; 

CREATE TABLE IF NOT EXISTS `startUps` (
	`startId` INT AUTO_INCREMENT PRIMARY KEY,
	`btOwner` VARCHAR(100) NOT NULL,
	`companyName` VARCHAR(100) NOT NULL,
	`segment` VARCHAR(100) NOT NULL,
	`logo` TEXT, -- IMAGE NAME
	`description` TEXT,
	`incorporationYear` INT NOT NULL,
	`incorporationLocation` VARCHAR(100),
	`joinDate` DATE,
	`webPage` VARCHAR(100) NOT NULL,
	`isFundraising` BOOL,
	`growthStage` TEXT,
	`hasExited` BOOL
) ENGINE=InnoDB; 





DROP TABLE IF EXISTS `founders`; 

CREATE TABLE IF NOT EXISTS `founders` (
	`startId` INT, 
    `founderId` INT AUTO_INCREMENT ,
    `name` VARCHAR(100) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `mail` VARCHAR(100) NOT NULL,
    `nationality` VARCHAR(100) NOT NULL,
    `isFemale` VARCHAR(100) NOT NULL,
    PRIMARY KEY (founderId , startId),
    FOREIGN KEY (startId)
        REFERENCES startUps (startId)
        ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB;





DROP TABLE IF EXISTS `contact`; 

CREATE TABLE IF NOT EXISTS `contact` (
	`startId` INT, 
    `contactId` INT AUTO_INCREMENT ,
    `name` VARCHAR(100) NOT NULL,
    `title` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `mail` VARCHAR(100) NOT NULL,
    PRIMARY KEY (contactId , startId),
    FOREIGN KEY (startId)
        REFERENCES startUps (startId)
        ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB;





DROP TABLE IF EXISTS `fundraising`; 

CREATE TABLE IF NOT EXISTS `fundraising` (
	`startId` INT, 
    `fundraisingId` INT AUTO_INCREMENT ,
    `round` INT NOT NULL,
    `amount` INT NOT NULL,
    `currency` VARCHAR(100) NOT NULL,
    `investor` VARCHAR(100) NOT NULL,
    `investmentVehicle` VARCHAR(100) NOT NULL,
    PRIMARY KEY (fundraisingId , startId),
    FOREIGN KEY (startId)
        REFERENCES startUps (startId)
        ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB;





DROP TABLE IF EXISTS `offices`; 

CREATE TABLE IF NOT EXISTS `offices` (
	`startId` INT, 
    `officeId` INT AUTO_INCREMENT ,
    `city` VARCHAR(100) NOT NULL,
    `counry` VARCHAR(100) NOT NULL,
    `isHq` BOOL NOT NULL,
    PRIMARY KEY (officeId , startId),
    FOREIGN KEY (startId)
        REFERENCES startUps (startId)
        ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB;





DROP TABLE IF EXISTS `socialMedia`; 

CREATE TABLE IF NOT EXISTS `socialMedia` (
	`startId` INT, 
    `socialId` INT AUTO_INCREMENT ,
    `instagram` VARCHAR(100) NOT NULL,
    `twitter` VARCHAR(100) NOT NULL,
    `facebook` VARCHAR(100) NOT NULL,
    `linkedin` VARCHAR(100) NOT NULL,
    PRIMARY KEY (socialId , startId),
    FOREIGN KEY (startId)
        REFERENCES startUps (startId)
        ON UPDATE RESTRICT ON DELETE CASCADE
) ENGINE=InnoDB;


-- insert  into `startUps`(`btOwner`,`companyName`,`segment`,
-- 	`logo`,`description`,`incorporationYear`,`joinDate`,`webPage`,`isFundraising`,`growthStage`,
-- 	`hasExited`) values 

-- ('hello', 'world', 'segment',
-- 	'logo','description', 2020, '1999-12-31','webPage', false,'growthStage',
-- 	true),
-- ('HIDFHDKAJHG', 'WO', 'segment',
-- 	'logo','description', 2021, '1999-12-31','webPage', false,'growthStage',
-- 	true);
