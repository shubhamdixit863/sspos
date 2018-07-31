-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 31, 2018 at 03:31 AM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sspos`
--

-- --------------------------------------------------------

--
-- Table structure for table `enquire`
--

DROP TABLE IF EXISTS `enquire`;
CREATE TABLE IF NOT EXISTS `enquire` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_t` datetime NOT NULL,
  `msg` longtext NOT NULL,
  `email` varchar(50) NOT NULL,
  `name` varchar(122) NOT NULL,
  `number` varchar(122) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `enquire`
--

INSERT INTO `enquire` (`id`, `date_t`, `msg`, `email`, `name`, `number`) VALUES
(10, '2017-10-12 17:18:10', 'Pankaj Kumar Singh,pankajkumar1483@gmail.com,9718656844', '77 events.xls', '', ''),
(11, '2017-10-31 15:36:09', 'MD ZULFIKAR ALI,zulfikar.ali2010@gmail.com,8340467352', 'Zulfikar-Resume-7.doc', '', ''),
(12, '2017-11-24 11:37:29', 'AVINASH RANJAN,Avinash.roots@gmail.com,9939480488', 'Avinash new (2).doc', '', ''),
(13, '2017-12-04 13:53:58', 'Vishal Gupta,gvishal14@yahoo.com,Gfg,Trhjif', '', '', ''),
(14, '2017-12-04 18:49:49', 'vishal,gvishal14349@gmail.com,kxjcaslkxjcapo,lkjda;lsj', '', '', ''),
(15, '2017-12-04 18:53:28', 'vishal,gvishal14349@gmail.com,kxjcaslkxjcapo,lkjda;lsj', '', '', ''),
(16, '2017-12-05 17:56:42', ',,,', '', '', ''),
(17, '2017-12-05 17:59:43', ',,,', '', '', ''),
(18, '2017-12-05 17:59:59', ',,,', '', '', ''),
(19, '2017-12-05 18:00:21', ',,,', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
CREATE TABLE IF NOT EXISTS `payment` (
  `id` int(40) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `amount` varchar(40) NOT NULL,
  `cutomerid` varchar(100) NOT NULL,
  `productname` varchar(100) NOT NULL,
  `date_t` datetime NOT NULL,
  `address` varchar(200) NOT NULL,
  `phone` varchar(40) NOT NULL,
  `payment_id` varchar(100) DEFAULT NULL,
  `payment_status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`id`, `name`, `email`, `amount`, `cutomerid`, `productname`, `date_t`, `address`, `phone`, `payment_id`, `payment_status`) VALUES
(1, 'shubham dixit', 'shubhamdixit863@gmail.com', '2750', '5cee4b10-9408-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:23:47', 'mig311', '09872642908', 'COD', NULL),
(2, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '9c028ef0-9409-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:32:42', 'mig311', '09872642908', 'COD', NULL),
(3, 'shubham dixit', 'shubhamdixit863@gmail.com', '1', 'c9078590-9409-11e8-9499-97a1df1c2680', 'Products-,SSR-T86E SCALE', '2018-07-30 20:33:58', 'mig311', '09872642908', 'COD', NULL),
(4, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '16ce1af0-940a-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:36:08', 'mig311', '09872642908', 'COD', NULL),
(5, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '60e4c7b0-940a-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:38:13', 'mig311', '09872642908', 'COD', NULL),
(6, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '98ba4c50-940a-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:39:46', 'mig311', '09872642908', 'COD', NULL),
(7, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', 'f073b9e0-940a-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:42:13', 'mig311', '09872642908', 'COD', NULL),
(8, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '0c533190-940b-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:43:00', 'mig311', '09872642908', 'COD', NULL),
(9, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', 'ad10a360-940b-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:47:30', 'mig311', '09872642908', 'COD', NULL),
(10, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', 'ca31e9e0-940b-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 20:48:19', 'mig311', '09872642908', 'Paypal', NULL),
(11, 'shubham dixit', 'shubhamdixit863@gmail.com', '2750', '126cfc00-9410-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 21:18:58', 'mig311', '09872642908', 'COD', NULL),
(12, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '5a76c1c0-9410-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 21:20:59', 'mig311', '09872642908', 'COD', NULL),
(13, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', 'c6d203c0-9410-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 21:24:01', 'mig311', '09872642908', 'COD', NULL),
(14, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', 'eb76f730-9410-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 21:25:02', 'mig311', '09872642908', 'COD', NULL),
(15, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '1af57950-9411-11e8-9499-97a1df1c2680', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 21:26:22', 'mig311', '09872642908', 'COD', NULL),
(16, 'shubham dixit', 'shubhamdixit863@gmail.com', '120', '7cf400f0-9415-11e8-9422-89ee52b806cd', 'Products-,Magstripe Card Reader', '2018-07-30 21:57:44', 'mig311', '09872642908', 'COD', NULL),
(17, 'shubham dixit', 'shubhamdixit863@gmail.com', '1375', '3b9612d0-9422-11e8-9030-3529ecfc70fb', 'Products-,SSR-3000-15-POS-TERMINAL', '2018-07-30 23:28:58', 'mig311', '09872642908', 'COD', NULL),
(18, 'shubham dixit', 'shubhamdixit863@gmail.com', '550', '5e54e120-9422-11e8-9030-3529ecfc70fb', 'Products-,Portable Data Terminal', '2018-07-30 23:29:56', 'mig311', '09872642908', 'COD', NULL),
(19, 'shubham dixit', 'shubhamdixit863@gmail.com', '550', '18276000-9423-11e8-9030-3529ecfc70fb', 'Products-,Portable Data Terminal', '2018-07-30 23:35:08', 'mig311', '09872642908', 'COD', NULL),
(20, 'shubham dixit', 'shubhamdixit863@gmail.com', '451', 'b5267c90-946b-11e8-95c3-dbd9d4290ba9', 'Products-,SSR-300-RECEIPT-PRINTERS', '2018-07-31 08:14:55', 'mig311', '09872642908', 'Paypal', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `paypal_payments`
--

DROP TABLE IF EXISTS `paypal_payments`;
CREATE TABLE IF NOT EXISTS `paypal_payments` (
  `id` int(122) NOT NULL AUTO_INCREMENT,
  `intent` varchar(122) DEFAULT NULL,
  `orderid` varchar(122) DEFAULT NULL,
  `payerid` varchar(122) DEFAULT NULL,
  `paymentid` varchar(122) DEFAULT NULL,
  `paymenttoken` varchar(122) DEFAULT NULL,
  `billingid` varchar(122) DEFAULT NULL,
  `payment_status` varchar(122) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
