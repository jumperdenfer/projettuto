-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 06 Avril 2016 à 14:45
-- Version du serveur :  5.7.9
-- Version de PHP :  5.6.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `l31516_cuillere`
--

-- --------------------------------------------------------

--
-- Structure de la table `l31516_produits`
--

DROP TABLE IF EXISTS `l31516_produits`;
CREATE TABLE IF NOT EXISTS `l31516_produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `libellé` varchar(21) NOT NULL,
  `prix` decimal(9,2) NOT NULL,
  `quantité` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `libellé` (`libellé`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `l31516_produits`
--

INSERT INTO `l31516_produits` (`id`, `libellé`, `prix`, `quantité`, `created`, `modified`) VALUES
(1, 'Cuillère', '99999.00', 42, '2016-03-30 00:00:00', '2016-03-30 00:00:00'),
(2, 'Spatule', '42.00', 21, '2016-03-31 23:16:13', '2016-03-31 23:16:13'),
(3, 'Cuillère à fromage', '210.00', 12, '2016-04-01 00:00:00', '2016-04-01 00:00:00'),
(4, 'Cuillère à café', '4.00', 0, '2016-04-02 02:07:05', '2016-04-02 02:07:05');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
