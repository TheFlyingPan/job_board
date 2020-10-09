-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3307
-- Generation Time: Oct 09, 2020 at 10:10 AM
-- Server version: 10.5.4-MariaDB
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job_board`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisements`
--

DROP TABLE IF EXISTS `advertisements`;
CREATE TABLE IF NOT EXISTS `advertisements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `company` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `createdAt` int(11) NOT NULL,
  `beginsAt` int(11) NOT NULL,
  `expiresAt` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=40 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `advertisements`
--

INSERT INTO `advertisements` (`id`, `title`, `author`, `content`, `company`, `company_name`, `createdAt`, `beginsAt`, `expiresAt`) VALUES
(38, 'Investor Paradigm Officer', 'Megan Pollich', 'Nostrum sequi nemo quis. Asperiores aut perspiciatis aut molestias accusantium. Sunt pariatur et consequatur. Qui corrupti necessitatibus.\n \rNatus eos quod praesentium culpa illo non praesentium autem magnam. Pariatur tenetur autem consequuntur enim culpa soluta sint rerum error. Mollitia autem reiciendis et qui ipsam. Laudantium ipsum amet sed qui numquam accusantium dolor nobis. Deleniti quis voluptatem aliquid qui cupiditate minus. Qui minus officia.', 1, 'Dare - Cummerata', 56, 2, 23),
(37, 'Global Identity Engineer', 'Casey Nikolaus', 'Qui numquam esse hic id earum. Rerum eaque doloribus sit vero doloremque esse. Eos qui placeat impedit quos est sed eligendi ratione voluptatibus. Ab voluptate aperiam quia veritatis ipsam eligendi perspiciatis velit molestiae.\n \rNeque provident laboriosam itaque. Doloribus sit alias nemo. Nulla qui dignissimos corrupti est iste similique vel aut eius. Sit voluptatum consequatur sed et nesciunt amet.', 1, 'Marvin and Sons', 56, 2, 23),
(35, 'Customer Paradigm Assistant', 'Melba Krajcik MD', 'Numquam tempore aspernatur culpa aut. Sed ut nobis animi debitis sunt ab voluptatum illo amet. Ab dolor quod repellendus deserunt eligendi nihil. Quo autem ipsum facilis molestiae quia ducimus. Pariatur rerum ullam odio architecto nobis autem et repudiandae odit. Blanditiis in ratione veritatis voluptate odio.\n \rQuod rerum doloremque suscipit consequatur consequuntur est magnam animi. Reiciendis quae maiores magni eum. Omnis minima blanditiis adipisci facere aut amet voluptatibus. Quis et assumenda dicta non ut in asperiores. Optio quaerat unde quos ut sit quia odio. Illum numquam beatae molestiae ipsum in a alias a eos.', 1, 'Ullrich, Nikolaus and Funk', 56, 2, 23),
(36, 'Human Quality Coordinator', 'Sandra Kuhlman DVM', 'Omnis qui sed qui. Ipsa et delectus unde. Mollitia dolor inventore quia commodi nostrum fugiat fugit tenetur.\n \rExercitationem possimus autem sunt veniam molestiae consequatur sit. Unde praesentium possimus est incidunt commodi natus illum commodi. Eaque et veritatis sit enim. Sit placeat repudiandae est eaque dignissimos quas dignissimos numquam.', 1, 'Jast LLC', 56, 2, 23),
(33, 'Future Quality Orchestrator', 'Clay Sporer', 'Qui dicta nam eos aut et tempore. Enim rerum voluptatem quia. Vero aliquam praesentium quaerat possimus ut aliquam omnis quis sit. Qui aut illo omnis amet sit cumque. Est est enim ratione qui explicabo laboriosam.\n \rModi reprehenderit ex mollitia. Ab et omnis. Adipisci cumque id mollitia placeat. Qui vitae aut minus alias.', 1, 'Kassulke Inc', 56, 2, 23),
(34, 'Forward Identity Specialist', 'Brett Reichel', 'Quis est quas quas ipsa velit. In deleniti aut dolore. Suscipit est quasi. Dignissimos veritatis maxime quo consequatur voluptatum dolores excepturi.\n \rAnimi odio non ab consequatur tempore ullam delectus. Id autem nemo delectus vel. Sint non est autem. Ipsam iusto quia laudantium. Consequatur et nostrum eum illo expedita eos rerum.', 1, 'Schamberger Group', 56, 2, 23),
(32, 'Dynamic Tactics Officer', 'Leland Hansen', 'Et totam et cupiditate nihil sed officiis dicta. Velit est deleniti. Laboriosam dignissimos odit magnam sit tempora dolore et. Perferendis est cumque omnis quia assumenda voluptatibus sint. Fuga explicabo repellendus sint possimus eos est quasi aperiam ex. Cum rerum magni quod nihil cupiditate in dolore officiis.\n \rLibero omnis velit nihil natus. Voluptas ea explicabo voluptatum tempore ea. Eos quam quia aut aliquid inventore. Velit laboriosam labore a eum nulla asperiores numquam sapiente minima. Soluta eum ut autem.', 1, 'Dibbert - Carter', 56, 2, 23),
(30, 'Human Response Executive', 'Javier Weber', 'Consequuntur ea inventore laborum temporibus ut et. Quia voluptas esse impedit quas sed et et omnis quasi. Nisi similique in quam dolores reiciendis aliquam suscipit. Saepe qui aut nihil molestias nulla facilis iste. Nihil numquam asperiores quasi natus aut recusandae aut. Aliquid omnis blanditiis cum iure quae.\n \rHarum quia at rerum. Enim iure expedita voluptatum a perspiciatis aspernatur autem. Veritatis enim itaque est maxime et. Ut aperiam omnis fugit natus.', 1, 'Goldner - Schamberger', 56, 2, 23),
(31, 'Product Creative Officer', 'Boyd Hahn', 'Reiciendis nam ipsa. Qui nostrum et nostrum commodi modi quo eaque numquam. Voluptatum eius optio debitis consequatur cupiditate et.\n \rVelit porro accusantium ab expedita quidem quasi voluptate repellat culpa. Provident dolores corrupti. Rerum qui numquam assumenda inventore reprehenderit quia dolor vel iste. Ut quos optio porro corporis voluptatem.', 1, 'Medhurst - Homenick', 56, 2, 23),
(39, 'Internal Research Supervisor', 'Tami Durgan', 'Adipisci ipsam maxime ab adipisci. Hic unde soluta pariatur harum. Modi culpa officia iste quis. Numquam dolorum ut et quos officiis ut. Ut est fugiat aspernatur ad alias. Eius ut cupiditate rerum perferendis rerum.\n \rEst et rerum ut a odit commodi ut. Ea ex harum. Dolor et quis quaerat et ut quisquam tempore aspernatur aspernatur. Cumque natus officiis.', 1, 'Emmerich Inc', 56, 2, 23);

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
CREATE TABLE IF NOT EXISTS `application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `candidate_id` int(11) NOT NULL DEFAULT 0,
  `candidate_last` varchar(255) NOT NULL,
  `candidate_first` varchar(255) NOT NULL,
  `advertisement_id` int(11) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
CREATE TABLE IF NOT EXISTS `companies` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

DROP TABLE IF EXISTS `people`;
CREATE TABLE IF NOT EXISTS `people` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `candidate_id` varchar(255) NOT NULL DEFAULT '0',
  `firstName` varchar(255) NOT NULL,
  `company_name` varchar(255) DEFAULT NULL,
  `company_id` int(11) DEFAULT NULL,
  `applying` tinyint(1) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
