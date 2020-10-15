-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 15, 2020 at 01:28 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.4.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
) ENGINE=MyISAM AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;

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
(39, 'Internal Research Supervisor', 'Tami Durgan', 'Adipisci ipsam maxime ab adipisci. Hic unde soluta pariatur harum. Modi culpa officia iste quis. Numquam dolorum ut et quos officiis ut. Ut est fugiat aspernatur ad alias. Eius ut cupiditate rerum perferendis rerum.\n \rEst et rerum ut a odit commodi ut. Ea ex harum. Dolor et quis quaerat et ut quisquam tempore aspernatur aspernatur. Cumque natus officiis.', 1, 'Emmerich Inc', 56, 2, 23),
(40, 'Dynamic Applications Officer', 'Jordan Lehner', 'Nisi ducimus ipsam sequi non saepe et consequatur. Error fugiat est beatae quibusdam repellendus sint. Consequatur voluptatum tempora ab ipsum aliquid est sint fugiat. Quae tempore omnis aut est magnam rerum assumenda perspiciatis fuga.\n \rEt veritatis perspiciatis porro magni amet minima. Recusandae veniam rerum est rerum excepturi doloremque accusantium. Deleniti sequi blanditiis accusantium ad sint ut ut. Quia corrupti expedita pariatur. Provident harum fugit dolor consequatur est. Dolorem rerum est saepe sed impedit cupiditate natus perferendis minus.', 1, 'Wisoky - Satterfield', 56, 2, 23),
(41, 'Internal Program Producer', 'Ms. Rafael Becker', 'A dolorem quidem. Nisi voluptatem consequatur. Vel quia possimus error architecto molestias earum. Rerum nobis inventore aut fugit aperiam. Iste magnam fugit ex non culpa voluptatum sapiente doloremque et.\n \rQuibusdam consequatur dolor. Recusandae repudiandae accusantium et quae. Modi omnis porro est sint ab. Rerum fuga eveniet neque. Assumenda asperiores minus ut cum soluta aliquam.', 1, 'Heaney and Sons', 56, 2, 23),
(42, 'Human Configuration Director', 'Miriam Stokes', 'Ex iusto error non nulla ut suscipit nostrum. Eaque dignissimos quos. Ex reprehenderit accusamus quia. Numquam optio nobis consequatur blanditiis minima vel mollitia. Dolore aut nihil numquam repudiandae.\n \rAut id eos similique modi pariatur est fuga saepe. Sed vel eaque reiciendis impedit necessitatibus occaecati culpa. Sunt officia ipsa quaerat minus vel.', 1, 'Ward, Carroll and West', 56, 2, 23),
(43, 'Chief Infrastructure Consultant', 'Marie Deckow', 'Minus maiores labore praesentium tempora ut sapiente in ducimus vel. Occaecati officiis minima sed eaque eius possimus est eaque. Explicabo sint deleniti magnam blanditiis repellendus repellat commodi. Mollitia exercitationem et quo atque. Ut quisquam sed qui est voluptatem sed dolor corrupti laudantium.\n \rUllam reiciendis voluptatem omnis quia. Commodi exercitationem facere dolor aspernatur assumenda. Vel sed quo. Aut eum laudantium veritatis incidunt hic nisi nostrum.', 1, 'Turner, Corwin and Jaskolski', 56, 2, 23),
(44, 'Forward Response Executive', 'Johnnie Weimann', 'Et tenetur adipisci sint totam a cumque nemo tempore. Qui quia quasi et esse et nihil aut. Cumque blanditiis sapiente. Quidem id est ipsam perspiciatis voluptas rerum quia at quisquam.\n \rEos ipsum magnam porro dolor ipsa. Quisquam error qui. Quae in ex. Totam molestiae tempore aperiam est saepe.', 1, 'Mraz, Brown and Kerluke', 56, 2, 23),
(45, 'Investor Operations Facilitator', 'Sherri Rodriguez', 'Soluta provident ea exercitationem repudiandae sequi sed laboriosam accusantium. Blanditiis qui nesciunt aut adipisci distinctio commodi autem illum. Dolor aliquam magni quia ad. Architecto et soluta rem deleniti molestiae unde reiciendis. Ad quis voluptate similique adipisci earum ea deserunt aliquid.\n \rCumque et nesciunt. Laboriosam cumque nisi. Exercitationem atque qui dolores laboriosam ipsa mollitia. Est perspiciatis aut animi est qui aperiam recusandae fugiat.', 1, 'Langosh Inc', 56, 2, 23),
(46, 'Internal Factors Associate', 'Mr. Melanie Schmeler', 'Voluptas porro qui in inventore voluptatem nulla. Assumenda aspernatur repellendus. Expedita nihil saepe sunt assumenda doloribus ea saepe omnis id. Tempora animi velit iusto quam. Fugiat exercitationem est aut ut rem nihil blanditiis molestiae omnis.\n \rDolore delectus numquam non provident expedita perferendis aut voluptas eum. Architecto voluptate exercitationem qui natus. Maxime sequi sunt aut officiis omnis error sunt omnis pariatur. Porro unde sit veritatis.', 1, 'Lemke Group', 56, 2, 23),
(47, 'Regional Integration Engineer', 'Paul Hand IV', 'Consequatur aut aut dolores quos impedit aperiam repellat. Dolores sunt facere animi. Excepturi eum nulla similique quos ipsum. Voluptas sunt delectus nam laborum adipisci illum perferendis. Magni sint non ipsum.\n \rMinus ullam quos culpa non in quia totam nostrum. Pariatur incidunt asperiores voluptatibus eos sunt dolore placeat eum. Et rerum quasi. Quia occaecati nostrum et cupiditate mollitia aliquam.', 1, 'Swaniawski and Sons', 56, 2, 23),
(48, 'Customer Interactions Administrator', 'Ms. Constance Krajcik', 'Adipisci expedita quos vitae sunt non. Eos deleniti in ea. Sapiente est rerum ullam numquam nesciunt velit nemo quos est. Sequi illo sit aut ducimus nobis sit eveniet quia ullam. Rerum voluptatibus totam. Possimus assumenda iure totam.\n \rTempore itaque odit porro dolor alias a aut est voluptatem. Sequi quibusdam ut nostrum aperiam. Sequi recusandae molestias in. Fuga amet eum adipisci pariatur tempora. Odit et voluptas fuga nesciunt. Quae in eaque porro provident aut.', 1, 'Schneider, Collins and Tillman', 56, 2, 23),
(49, 'Regional Applications Planner', 'Raquel Bogan', 'Sunt voluptates aut aut fuga doloremque. Aperiam aut ad voluptatem. Saepe natus culpa consequatur maiores dolorum officiis sapiente officiis. Omnis distinctio tempore non. Eum ex odit mollitia aliquam est dolor voluptatem tempora dolorem.\n \rPerferendis unde et omnis distinctio. Officiis et veritatis modi. Corrupti id temporibus eos repellendus quo. Omnis voluptatem sit numquam provident aut. Fugit nihil sunt vero similique quia aspernatur.', 1, 'Jacobs - Mosciski', 56, 2, 23),
(50, 'Dynamic Assurance Supervisor', 'Garrett Becker IV', 'Provident aut quis magni qui in tenetur. Inventore eveniet et autem ut ipsam omnis est dolorum iure. Pariatur ipsa quia harum officiis maxime minus. Exercitationem ea omnis consequuntur delectus nihil magni. Sunt rerum harum consequuntur dolorem perspiciatis qui.\n \rRem nemo assumenda blanditiis libero sapiente temporibus aperiam ut voluptas. Eos cum ut debitis. Nam itaque sed sapiente a reprehenderit autem non corporis.', 1, 'Watsica - Shields', 56, 2, 23),
(51, 'Product Group Architect', 'Angie Rosenbaum', 'Qui sit quos temporibus beatae. Laudantium rerum voluptatum a nisi quia quis dolor eum. Nemo et eum delectus dolorem aliquid alias et qui iure. Accusamus libero nemo corrupti totam nihil. Eligendi optio officiis in qui nihil.\n \rPraesentium aperiam adipisci velit voluptatibus vel magni alias nobis. Qui at quia repellendus. Iste aut quasi doloremque. Ex numquam fugit sit perspiciatis. Quo nisi sint maiores eveniet eligendi natus optio.', 1, 'Cole Group', 56, 2, 23);

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
CREATE TABLE IF NOT EXISTS `application` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `candidate_id` varchar(255) NOT NULL DEFAULT '0',
  `candidate_last` varchar(255) NOT NULL,
  `candidate_first` varchar(255) NOT NULL,
  `advertisement_id` int(11) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  `contact_phone` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=23 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`id`, `candidate_id`, `candidate_last`, `candidate_first`, `advertisement_id`, `contact_email`, `contact_phone`, `message`) VALUES
(21, '0', 'Poirier', 'Aurélien', 37, 'aurepoir00@gmail.com', '0679730610', 'bnonsoiur je suisuis '),
(22, '54df4a76-a017-4253-9515-91c4163ee364', 'Poirier', 'Aurélien', 38, 'aurepoir00@gmail.com', 'undefined', 'ghghghgh');

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
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `people`
--

INSERT INTO `people` (`id`, `candidate_id`, `firstName`, `company_name`, `company_id`, `applying`, `lastName`, `email`, `password`) VALUES
(14, '54df4a76-a017-4253-9515-91c4163ee364', 'Aurélien', 'undefined', 38955, 1, 'Poirier', 'aurepoir00@gmail.com', '$2b$10$9nYee9O22Tq/Vr4EUVfx6.wNEeAaQP2JdQtG3Bn3vyAmQyxu.KERG');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
