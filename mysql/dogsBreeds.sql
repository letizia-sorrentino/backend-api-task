-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 23, 2023 at 06:06 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dogs-sql`
--

-- --------------------------------------------------------

--
-- Table structure for table `dogsBreeds`
--

CREATE TABLE `dogsBreeds` (
  `id` int(11) NOT NULL,
  `breed` varchar(64) NOT NULL,
  `size` varchar(64) NOT NULL,
  `lifespan` varchar(64) NOT NULL,
  `colours` varchar(64) NOT NULL,
  `dogGroup` varchar(64) NOT NULL,
  `exerciseDemands` varchar(64) NOT NULL,
  `groomingNeeds` varchar(64) NOT NULL,
  `image` varchar(1024) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dogsBreeds`
--

INSERT INTO `dogsBreeds` (`id`, `breed`, `size`, `lifespan`, `colours`, `dogGroup`, `exerciseDemands`, `groomingNeeds`, `image`) VALUES
(2, 'Labrador Retriever', 'Large', '10-14 years', 'Black, Gold, Chocolate', 'Gundog', 'Moderate to High', 'Moderate to High', 'https://petkeen.com/wp-content/uploads/2022/08/Labrador-Retriever_Angel-Luciano_Unsplash.webp'),
(3, 'Cockapoo', 'Small', '12-15 years', 'Black, Brown, Tan, White', 'Designer', 'Moderate', 'High', 'https://petkeen.com/wp-content/uploads/2022/08/Labrador-Retriever_Angel-Luciano_Unsplash.webp'),
(4, 'French Bulldog', 'Small', '11-14 years', 'White, Brindle, Fawn, Tan', 'Companion', 'Moderate', 'Moderate', 'https://petkeen.com/wp-content/uploads/2022/04/french-bulldog-on-th-grass-with-harness_yhelfmanShuterstock.webp');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dogsBreeds`
--
ALTER TABLE `dogsBreeds`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dogsBreeds`
--
ALTER TABLE `dogsBreeds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
