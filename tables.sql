-- Esquema actual compatible con la base de datos y con el código del proyecto

CREATE TABLE `t_recipes` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `rec_name` varchar(50) NOT NULL,
  `rec_url` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`rec_id`),
  UNIQUE KEY `rec_name` (`rec_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `t_ingredients` (
  `ing_id` int(11) NOT NULL AUTO_INCREMENT,
  `ing_name` varchar(50) NOT NULL,
  `ing_kind` varchar(50) NOT NULL,
  `ing_unit` varchar(50) NOT NULL,
  PRIMARY KEY (`ing_id`),
  UNIQUE KEY `ing_name` (`ing_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `t_ingredients_recipes` (
  `ire_rec_id` int(11) DEFAULT NULL,
  `ire_ing_id` int(11) DEFAULT NULL,
  `ire_quantity` int(5) DEFAULT NULL,
  KEY `ire_fk1` (`ire_ing_id`),
  KEY `ire_fk2` (`ire_rec_id`),
  CONSTRAINT `ire_fk1` FOREIGN KEY (`ire_ing_id`) REFERENCES `t_ingredients` (`ing_id`) ON DELETE CASCADE,
  CONSTRAINT `ire_fk2` FOREIGN KEY (`ire_rec_id`) REFERENCES `t_recipes` (`rec_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `t_recipes_list` (
  `recl_id` int(11) NOT NULL AUTO_INCREMENT,
  `recl_rec_id` int(11) NOT NULL,
  `recl_fec` timestamp NOT NULL,
  PRIMARY KEY (`recl_id`),
  KEY `recl_fk1` (`recl_rec_id`),
  CONSTRAINT `recl_fk1` FOREIGN KEY (`recl_rec_id`) REFERENCES `t_recipes` (`rec_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;