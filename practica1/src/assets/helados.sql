-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-10-2018 a las 06:04:07
-- Versión del servidor: 10.1.31-MariaDB
-- Versión de PHP: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `helados`
--

CREATE TABLE `helados` (
  `id` int(11) NOT NULL,
  `sabor` varchar(50) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `foto` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `helados`
--

INSERT INTO `helados` (`id`, `sabor`, `tipo`, `cantidad`, `foto`) VALUES
(1, 'Chocolate', 'Crema', 35, 'chocolate-crema'),
(2, 'Frutilla', 'Crema', 30, 'frutilla-crema'),
(3, 'Frutilla', 'Agua', 15, 'frutilla-agua'),
(5, 'Limón', 'Agua', 15, 'limon-agua'),
(31, 'Vainilla', 'Crema', 25, 'vainilla-crema.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `helados`
--
ALTER TABLE `helados`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `helados`
--
ALTER TABLE `helados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
