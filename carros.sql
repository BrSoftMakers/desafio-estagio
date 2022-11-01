-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 31-Out-2022 às 16:33
-- Versão do servidor: 5.7.36
-- versão do PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `locadora`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `carros`
--

DROP TABLE IF EXISTS `carros`;
CREATE TABLE IF NOT EXISTS `carros` (
  `id` int(12) NOT NULL AUTO_INCREMENT COMMENT 'Chave Primaria usada para manipular todo/quase todo o projeto.',
  `chassi` varchar(255) NOT NULL COMMENT 'Chassi do veiculo!',
  `modelo` varchar(255) NOT NULL COMMENT 'Modelo do automovel!',
  `marca` varchar(255) NOT NULL COMMENT 'Marca do automovel!',
  `tipo` varchar(255) NOT NULL COMMENT 'Tipo do automovel!',
  `situacao` varchar(20) NOT NULL COMMENT 'Situação do veiculo.\r\nDisponivel/Indisponivel',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=557 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `carros`
--

INSERT INTO `carros` (`id`, `chassi`, `modelo`, `marca`, `tipo`, `situacao`) VALUES
(555, 'W3L', 'Ferrari F16', 'Ferrari', 'Hatch', 'Disponivel'),
(554, 'H4LL6W33N', 'Jaguar Type F', 'Jaguar', 'Hatch', 'Disponivel');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
