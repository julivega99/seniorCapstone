


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


insert  into `startUps`
	(`btOwner`,`companyName`,`segment`, `logo`,`description`,
	`incorporationYear`, `incorporationLocation`, `joinDate`,`
 	webPage`,`isFundraising`,`growthStage`,`hasExited`) values

--  1
(NULL, 'Comuni', 'EdTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 2
(NULL, 'Bankaio', 'FinTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 3
(NULL, 'Gift Point', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 4
(NULL, 'LabNEx', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 5
(NULL, 'AltScore', 'finTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 6
(NULL, 'Factu.com.ec', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 7
(NULL, 'Tiendon', 'eCommerce', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 8
(NULL, 'PagoPlux', 'finTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 9
(NULL, 'Chaskea Delivery', 'Logistics', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 10
(NULL, 'Mgma', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 11
(NULL, 'Equileap', 'finTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 12
(NULL, 'Aoraservicios', 'propTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 13
(NULL, 'Biofeeder', 'agTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 14
(NULL, 'Psiconnect', 'healthTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 15
(NULL, 'Kanguro Market', 'eCommerce', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 16
(NULL, 'Boprice', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 17
(NULL, 'Mimall', 'eCommerce', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 18
(NULL, 'COGNITIVA Factory Performance Booster', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 19
(NULL, 'Zine.ec', 'Entertainment', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 20
(NULL, 'Xpatial', 'propTech', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 21
(NULL, 'Mayorist.com', 'eCommerce', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 22
(NULL, 'ESTIMA Finanzas', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)

-- 23
(NULL, 'alquilar.ec', 'Business Solutions', NULL, NULL, 
	NULL, NULL, NULL, 
	NULL, NULL, NULL, NULL)


