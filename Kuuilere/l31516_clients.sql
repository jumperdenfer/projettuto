-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mer 06 Avril 2016 à 14:44
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
-- Structure de la table `l31516_clients`
--

DROP TABLE IF EXISTS `l31516_clients`;
CREATE TABLE IF NOT EXISTS `l31516_clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(21) NOT NULL,
  `password` varchar(666) NOT NULL,
  `name` varchar(21) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT '0',
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modified` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login` (`login`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Contenu de la table `l31516_clients`
--

INSERT INTO `l31516_clients` (`id`, `login`, `password`, `name`, `admin`, `created`, `modified`) VALUES
(1, 'admin', '84da556ef53edd52ca0f56f7dec406596380b9bd0cab40592d45f449e2c1307d', 'admin', 1, '2016-04-04 22:36:18', '2016-04-04 22:36:18'),
(6, 'gilles', '0b8755e2ed0dd88e1dab86a035e6719d1810765e40c7f90d19b1a7d1a573bd5c', 'Gilles Subrenat', 0, '2016-04-04 22:43:02', '2016-04-04 22:43:02'),
(7, 'patrice', 'd3a4ee7c8d457192dbfc7e1ba1dff70f093f114b313c8defec520b161ef1ad50', 'Patrice Naudin', 0, '2016-04-04 22:50:49', '2016-04-04 22:50:49'),
(9, 'DCoD', '908115d1af5ae62c578d85369839b8993e2fc3f49d2ce31f6ecb0a3b8f1f2a11', 'Kevin Decroos', 0, '2016-04-05 17:56:06', '2016-04-05 17:56:06'),
(11, 'Celthim', '7936b8bd89041bfcaad2e3117e8ce27d40f192537e3947478c49da7d739b1c9d', 'Roï Shviro', 0, '2016-04-05 21:08:46', '2016-04-05 21:08:46');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
