-- phpMyAdmin SQL Dump
-- version 3.5.8.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Czas wygenerowania: 12 Sty 2017, 17:31
-- Wersja serwera: 5.5.31
-- Wersja PHP: 5.2.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `gettech_octoPL`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `activity`
--

CREATE TABLE IF NOT EXISTS `activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `course_status` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `course_time_start` date NOT NULL,
  `course_time_end` date NOT NULL,
  `course_result` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `course_number_of_enter` int(11) NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Zrzut danych tabeli `activity`
--

INSERT INTO `activity` (`id`, `user_id`, `course_id`, `course_status`, `course_time_start`, `course_time_end`, `course_result`, `course_number_of_enter`, `content`) VALUES
(2, 1, 1, 'open', '2017-01-05', '0000-00-00', '', 1, '[{"module_id":"1","start_date":"2017-1-5 13:36:12","status":"new","enter_number":"0","tasks":[{"task_id":"1","status":"in_progress","name":"Tryb interaktywny","enter_number":31,"tasks":[{"task_id":"4","status":"new","name":"M1L1P1","enter_number":"0"},{"task_id":"5","status":"new","name":"M1L1P2","enter_number":"0"},{"task_id":"6","status":"new","name":"M1L1P3","enter_number":"0"},{"task_id":"7","status":"new","name":"M1L1P4","enter_number":"0"},{"task_id":"8","status":"new","name":"M1L1P5","enter_number":"0"},{"task_id":"9","status":"new","name":"M1L1P6","enter_number":"0"},{"task_id":"10","status":"new","name":"M1L1P7","enter_number":"0"},{"task_id":"11","status":"new","name":"M1L1P8","enter_number":"0"},{"task_id":"12","status":"new","name":"M1L1P9","enter_number":"0"},{"task_id":"13","status":"new","name":"M1L1P10","enter_number":"0"},{"task_id":"14","status":"new","name":"M1L1P11","enter_number":"0"}]},{"task_id":"15","status":"in_progress","name":"Hello World","enter_number":3,"tasks":[{"task_id":"16","status":"new","name":"M1L2P1","enter_number":"0"},{"task_id":"17","status":"new","name":"M1L2P2","enter_number":"0"},{"task_id":"18","status":"new","name":"M1L2P3","enter_number":"0"},{"task_id":"19","status":"new","name":"M1L2P4","enter_number":"0"},{"task_id":"20","status":"new","name":"M1L2P5","enter_number":"0"}]},{"task_id":"21","status":"in_progress","name":"Lancuchy Tekstu","enter_number":1,"tasks":[{"task_id":"22","status":"new","name":"M1L3P1","enter_number":"0"},{"task_id":"23","status":"new","name":"M1L3P2","enter_number":"0"},{"task_id":"24","status":"new","name":"M1L3P3","enter_number":"0"},{"task_id":"25","status":"new","name":"M1L3P4","enter_number":"0"}]}]}]');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `course`
--

CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pathway_id` int(11) NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Zrzut danych tabeli `course`
--

INSERT INTO `course` (`id`, `pathway_id`, `type`, `name`, `description`) VALUES
(1, 0, 'Python', 'Kurs j??zyka Python', 'Kurs j??zyka Python');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `dictionary`
--

CREATE TABLE IF NOT EXISTS `dictionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `page` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=5 ;

--
-- Zrzut danych tabeli `dictionary`
--

INSERT INTO `dictionary` (`id`, `name`, `page`, `content`) VALUES
(1, 'dialog_loginPanel', 'all', 'Panel logowania'),
(2, 'dialog_input_login', 'all', 'Login'),
(3, 'dialog_input_password', 'all', 'Has??o'),
(4, 'dialog_form_login', 'all', 'Zaloguj');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `logs`
--

CREATE TABLE IF NOT EXISTS `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `user_id` int(11) NOT NULL,
  `event` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=164 ;

--
-- Zrzut danych tabeli `logs`
--

INSERT INTO `logs` (`id`, `date`, `user_id`, `event`, `content`) VALUES
(6, '2016-10-17 19:18:26', 1, 'userLoggedIn', '{"sessionKey":"DtwVLTTRT8I6ld7qDOwe"}'),
(7, '2016-10-17 19:18:28', 1, 'userLoggedOut', '{"sessionKey":"DtwVLTTRT8I6ld7qDOwe"}'),
(8, '2016-10-17 19:58:00', 1, 'userLoggedIn', '{"sessionKey":"tmu0PYBUlswGjPC1LWR7"}'),
(9, '2016-10-17 19:58:02', 1, 'userLoggedOut', '{"sessionKey":"tmu0PYBUlswGjPC1LWR7"}'),
(10, '2016-10-17 20:05:47', 1, 'userLoggedIn', '{"sessionKey":"oW6hYFa6xSnUPIkf0EgW"}'),
(11, '2016-10-17 20:05:52', 1, 'userLoggedOut', '{"sessionKey":"oW6hYFa6xSnUPIkf0EgW"}'),
(12, '2016-10-17 20:39:38', 1, 'userLoggedIn', '{"sessionKey":"tTLoe1wPpNLmVULqMZx9"}'),
(13, '2016-10-17 20:40:28', 1, 'userLoggedOut', '{"sessionKey":"tTLoe1wPpNLmVULqMZx9"}'),
(14, '2016-10-20 17:29:13', 1, 'userLoggedIn', '{"sessionKey":"RWxwAMJBC7oVle0ufhBq"}'),
(15, '2016-10-20 17:30:36', 1, 'userLoggedOut', '{"sessionKey":"RWxwAMJBC7oVle0ufhBq"}'),
(16, '2016-10-23 15:09:22', 1, 'userLoggedIn', '{"sessionKey":"M1IhYAiHEdi0jPoKlP3Q"}'),
(17, '2016-10-27 11:53:13', 1, 'userLoggedIn', '{"sessionKey":"Czl9DD5mfx944LIS68Gy"}'),
(18, '2016-10-27 11:53:35', 1, 'userLoggedOut', '{"sessionKey":"Czl9DD5mfx944LIS68Gy"}'),
(19, '2016-10-27 17:19:55', 1, 'userLoggedIn', '{"sessionKey":"Y2aNMTrH9EZeiec23QNt"}'),
(20, '2016-11-03 11:07:07', 1, 'userLoggedIn', '{"sessionKey":"jER6Yu5YZGyJGRO5cnbb"}'),
(22, '2016-11-03 15:16:40', 1, 'user_module_started', '{"sessionKey":"jER6Yu5YZGyJGRO5cnbb"}'),
(23, '2016-11-03 16:54:02', 1, 'userLoggedIn', '{"sessionKey":"NIV2w0sWXI8yzZeDrV2Y"}'),
(24, '2016-11-03 16:54:02', 1, 'userLoggedIn', '{"sessionKey":"hyW1NwWJpYrrXSxQDn4x"}'),
(25, '2016-11-03 16:54:07', 1, 'user_course_started', '{"sessionKey":"hyW1NwWJpYrrXSxQDn4x"}'),
(26, '2016-11-03 17:06:59', 1, 'userLoggedIn', '{"sessionKey":"rtRoQDnmbvL60sh3N632"}'),
(27, '2016-11-03 17:07:19', 1, 'user_course_started', '{"sessionKey":"rtRoQDnmbvL60sh3N632"}'),
(28, '2016-11-03 17:07:33', 1, 'user_module_started', '{"sessionKey":"rtRoQDnmbvL60sh3N632"}'),
(29, '2016-11-06 20:12:02', 1, 'userLoggedIn', '{"sessionKey":"JN0BatjwneIN7jNX6Zhd"}'),
(30, '2016-11-06 20:12:03', 1, 'userLoggedIn', '{"sessionKey":"vxu9grFTER96zgHmyFEY"}'),
(31, '2016-11-06 20:12:26', 1, 'user_course_started', '{"sessionKey":"vxu9grFTER96zgHmyFEY"}'),
(32, '2016-11-06 20:43:57', 1, 'userLoggedIn', '{"sessionKey":"vPiDeYwVqR6TifENVlY9"}'),
(33, '2016-11-06 20:57:42', 1, 'user_course_started', '{"sessionKey":"vPiDeYwVqR6TifENVlY9"}'),
(34, '2016-11-16 18:58:09', 1, 'userLoggedIn', '{"sessionKey":"V3pZURHeyoO8thfpS04X"}'),
(35, '2016-11-16 18:58:19', 1, 'user_course_started', '{"sessionKey":"V3pZURHeyoO8thfpS04X"}'),
(36, '2017-01-03 20:00:59', 1, 'userLoggedIn', '{"sessionKey":"zMj1KSmJDMywGPzORGqT"}'),
(37, '2017-01-03 20:01:05', 1, 'user_course_started', '{"sessionKey":"zMj1KSmJDMywGPzORGqT"}'),
(38, '2017-01-03 20:07:45', 1, 'course_started_id_1', '{"sessionKey":"zMj1KSmJDMywGPzORGqT"}'),
(39, '2017-01-03 20:07:46', 1, 'course_started_id_1', '{"sessionKey":"zMj1KSmJDMywGPzORGqT"}'),
(40, '2017-01-05 12:58:33', 1, 'userLoggedIn', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(41, '2017-01-05 12:58:34', 1, 'course_started_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(42, '2017-01-05 12:58:39', 1, 'user_course_started', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(43, '2017-01-05 12:58:41', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(44, '2017-01-05 12:58:41', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(45, '2017-01-05 12:59:29', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(46, '2017-01-05 12:59:29', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(47, '2017-01-05 13:29:41', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(48, '2017-01-05 13:29:41', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(49, '2017-01-05 13:34:57', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(50, '2017-01-05 13:34:57', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(51, '2017-01-05 13:36:12', 1, 'course_started_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(52, '2017-01-05 13:36:13', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(53, '2017-01-05 13:36:13', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(54, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(55, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(56, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(57, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(58, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(59, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(60, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(61, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(62, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(63, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(64, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"S3LFKMMLl1krgbHCS24l"}'),
(65, '0000-00-00 00:00:00', 1, 'userLoggedIn', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(66, '0000-00-00 00:00:00', 1, 'user_course_started', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(67, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(68, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(69, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(70, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(71, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(72, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(73, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(74, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(75, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(76, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(77, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(78, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(79, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(80, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(81, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(82, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(83, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(84, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(85, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(86, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(87, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(88, '0000-00-00 00:00:00', 1, 'task_entered_id_15', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(89, '0000-00-00 00:00:00', 1, 'task_entered_id_15', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(90, '0000-00-00 00:00:00', 1, 'task_changed_for_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(91, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(92, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(93, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(94, '0000-00-00 00:00:00', 1, 'task_entered_id_15', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(95, '0000-00-00 00:00:00', 1, 'task_entered_id_15', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(96, '0000-00-00 00:00:00', 1, 'task_changed_for_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(97, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(98, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(99, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(100, '0000-00-00 00:00:00', 1, 'task_entered_id_15', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(101, '0000-00-00 00:00:00', 1, 'task_entered_id_15', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(102, '0000-00-00 00:00:00', 1, 'task_entered_id_21', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(103, '0000-00-00 00:00:00', 1, 'task_entered_id_21', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(104, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(105, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(106, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(107, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(108, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(109, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(110, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(111, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(112, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(113, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(114, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(115, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(116, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(117, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(118, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(119, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(120, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(121, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(122, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"yjLQRy5WbTsVE5f2wXNs"}'),
(123, '0000-00-00 00:00:00', 1, 'userLoggedIn', '{"sessionKey":"fjgPS1zvqcgWMsdLdntW"}'),
(124, '0000-00-00 00:00:00', 1, 'user_course_started', '{"sessionKey":"fjgPS1zvqcgWMsdLdntW"}'),
(125, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"fjgPS1zvqcgWMsdLdntW"}'),
(126, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"fjgPS1zvqcgWMsdLdntW"}'),
(127, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"fjgPS1zvqcgWMsdLdntW"}'),
(128, '0000-00-00 00:00:00', 1, 'userLoggedIn', '{"sessionKey":"k41aERgGy2LWJfJib6FX"}'),
(129, '0000-00-00 00:00:00', 1, 'user_course_started', '{"sessionKey":"k41aERgGy2LWJfJib6FX"}'),
(130, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"k41aERgGy2LWJfJib6FX"}'),
(131, '0000-00-00 00:00:00', 1, 'task_entered_id_1', '{"sessionKey":"k41aERgGy2LWJfJib6FX"}'),
(132, '0000-00-00 00:00:00', 1, 'task_loaded_id_1', '{"sessionKey":"k41aERgGy2LWJfJib6FX"}'),
(133, '0001-01-01 01:01:01', 1, 'userLoggedIn', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(134, '0001-01-01 01:01:01', 1, 'user_course_started', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(135, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(136, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(137, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(138, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(139, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(140, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(141, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(142, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"pD28w0Ji8KzwAZzx4Syh"}'),
(143, '0001-01-01 01:01:01', 1, 'userLoggedIn', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(144, '0001-01-01 01:01:01', 1, 'user_course_started', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(145, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(146, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(147, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(148, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(149, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(150, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(151, '0001-01-01 01:01:01', 1, 'user_course_started', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(152, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(153, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(154, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"Z8Hpjy1UrHp5rcWIXfsA"}'),
(155, '0001-01-01 01:01:01', 1, 'userLoggedIn', '{"sessionKey":"17rR3yLPcoOskX7YfFLI"}'),
(156, '0001-01-01 01:01:01', 1, 'user_course_started', '{"sessionKey":"17rR3yLPcoOskX7YfFLI"}'),
(157, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"17rR3yLPcoOskX7YfFLI"}'),
(158, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"17rR3yLPcoOskX7YfFLI"}'),
(159, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"17rR3yLPcoOskX7YfFLI"}'),
(160, '0001-01-01 01:01:01', 1, 'userLoggedIn', '{"sessionKey":"COgi24pulQ3khBXqoX4v"}'),
(161, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"COgi24pulQ3khBXqoX4v"}'),
(162, '0001-01-01 01:01:01', 1, 'task_entered_id_1', '{"sessionKey":"COgi24pulQ3khBXqoX4v"}'),
(163, '0001-01-01 01:01:01', 1, 'task_loaded_id_1', '{"sessionKey":"COgi24pulQ3khBXqoX4v"}');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `module`
--

CREATE TABLE IF NOT EXISTS `module` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pathway_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `type` varchar(100) CHARACTER SET latin1 NOT NULL,
  `name` varchar(100) CHARACTER SET latin1 NOT NULL,
  `description` text CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=2 ;

--
-- Zrzut danych tabeli `module`
--

INSERT INTO `module` (`id`, `pathway_id`, `course_id`, `type`, `name`, `description`) VALUES
(1, 0, 1, 'lesson', 'Podstawy', 'Podstawy');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pathway`
--

CREATE TABLE IF NOT EXISTS `pathway` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `resources`
--

CREATE TABLE IF NOT EXISTS `resources` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pathway_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` text COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=8 ;

--
-- Zrzut danych tabeli `resources`
--

INSERT INTO `resources` (`id`, `pathway_id`, `module_id`, `type`, `name`, `description`) VALUES
(1, 0, 1, 'lesson', 'Wprowadzenie: praca w trybie interaktywnym', 'Czego nauczysz si?? w tej lekcji:\r\nWykorzystywania interpretera Pythona w trybie interaktywnym do wykonywania oblicze?? i pisania bardzo prostych program??w.\r\n'),
(7, 0, 1, 'lesson', 'Cokolwiek', 'test');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `statistic`
--

CREATE TABLE IF NOT EXISTS `statistic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `tasks`
--

CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `answers` text COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `correct_answer` text COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `reference_id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=26 ;

--
-- Zrzut danych tabeli `tasks`
--

INSERT INTO `tasks` (`id`, `content`, `answers`, `type`, `correct_answer`, `name`, `reference_id`, `module_id`) VALUES
(1, '', '', 'lesson', '', 'Tryb interaktywny', 0, 1),
(4, '<h4>  <strong>Czego nauczysz si?? w tej lekcji:</strong></h4>\r\n            <p>Wykorzystywania interpretera Pythona w trybie interaktywnym do wykonywania oblicze?? i pisania bardzo prostych program??w. </p>\r\n            <h5><strong>Tryb interaktywny</strong></h5>\r\n            <p>Rozpocznij od uruchomienia zintegrowanego ??rodowiska Pythona czyli programu IDLE (w systemie Windows s??u??y do tego skr??t, w Linuxie wydaj polecenie idle3). Na ekranie zobaczysz obraz zbli??ony do takiego (Windows):</p>\r\n            <code>\r\n                Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 25 2016, 22:01:18) [MSC v.1900 32 bit (Intel)] on win32<br/>\r\n                Type "copyright", "credits" or "license()" for more information.<br/>\r\n                >>>\r\n            </code>\r\n            <p>albo takiego (Linux):</p>\r\n            <code>\r\n                Python 3.3.0 (default, Oct 01 2012, 09:13:30) [GCC] on linux<br/>\r\n                Type "help", "copyright", "credits" or "license" for more information.<br/>\r\n                >>>\r\n            </code>\r\n            <p>Uruchamiaj??c interpreter zawsze zwracaj uwag?? na pierwsz?? lini??. Prawdopodobnie b??dziesz mia?? inny numer wersji ale musi to by?? wersja 3.co?? a nie 2.co?? (Python 2 to starsza wersja j??zyka nadal u??ywana i popularna ale r????ni??ca si?? od aktualnej ??? 3).</p>\r\n            <p> W linii zawieraj??cej znak zach??ty <i>>>></i>  wprowadzasz instrukcje, kt??re po zatwierdzeniu klawiszem <i>Enter </i>b??d?? natychmiast przetwarzane przez interpreter. Sesj?? interpretera zamkniesz wprowadzaj??c z klawiatury<i> Ctrl-D</i>.  </p>', '', 'lesson', '', 'M1L1P1', 1, 1),
(5, '<p> Zacznijmy od wykorzystania <i>Pythona </i> jako zaawansowanego kalkulatora. Najbardziej oczywistym testem kalkulatora jest chyba wprowadzenie wyra??enia <i>???2+2???</i>.  </p>\r\n            <p><strong><img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> wprowad?? <i>???2+2???</i>, ewentualnie dodaj??c dla czytelno??ci spacje rozdzielaj??ce (nie maj?? wp??ywu na wynik) i zatwierd?? klawiszem <i>Enter (Return)</i>. Powiniene?? zobaczy?? nast??puj??cy efekt: </p>\r\n            <code>\r\n                >>> 2 + 2<br/>\r\n                4<br/>\r\n                >>>\r\n            </code>\r\n            <p>Interpreter wykona?? obliczenia, wy??wietli?? wynik (zgodnie z oczekiwaniami to 4) i jest gotowy do dalszej pracy ??? wy??wietla znak zach??ty<i> ???>>>???</i>.</p>\r\n            <p>Mo??esz oczywi??cie wykonywa?? r??wnie?? bardziej z??o??one obliczenia ??? regu??y konstruowania wyra??e?? s?? tutaj podobne jak w matematyce. Mo??esz u??ywa?? operator??w i nawias??w: sprawd?? wprowadzaj??c bardziej skomplikowane wyra??enie:</p>\r\n            <code>\r\n                >>> 2 * (3 + 4)</br>\r\n                14\r\n            </code>', '', 'lesson', '', 'M1L1P2', 1, 1),
(6, '<p> Regu??y dotycz??ce priorytet??w i wi??za?? w wyra??eniach arytmetycznych b??d?? podobne jak w matematyce. <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> wprowad?? testowe wyra??enie nie zawieraj??ce nawias??w i u??yj operator??w mno??enia<i> ???*???</i> i dodawania <i>???+???</i>: </p>\r\n            <code>>>> 2 + 3 * 4<br/>\r\n                14\r\n            </code>\r\n            <p>Zgodnie z matematycznymi regu??ami najpierw zosta??o wykonane mno??enie (wy??szy priorytet) 3 * 4 = 12 a nast??pnie dodawanie 2 + 12 = 14.</p>\r\n            <p>  Przyjrzyjmy si?? teraz dzia??aniu operatora dzielenia ??? w programach nie u??ywa si?? klasycznej poziomej kreski u??amkowej (-) ani obelusa (_) tylko znaku ???/???.<br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  wprowad?? wyra??enie<i> ???8 / 4???</i>: </p>\r\n            <code>>>> 8 / 4<br/>\r\n                2.0\r\n            </code>\r\n            <p> Rezultat jest (w zasadzie) zgodny z oczekiwaniami. Mo??e Ci?? jednak zastanawia?? dlaczego w odpowiedzi dosta??e?? tym razem <i>???2.0???</i> a nie tylko <i>???2???</i>. Przecie??, podobnie jak we wcze??niejszych testach, argumentami operacji arytmetycznej by??y liczby ca??kowite (czyli nie posiadaj??ce cz????ci u??amkowej). </p>', '', 'lesson', '', 'M1L1P3', 1, 1),
(7, '<p> W przeciwie??stwie do dodawania i mno??enia wykonywanego na liczbach ca??kowitych Python przyjmuje, ??e rezultatem operacji dzielenia zawsze jest liczba rzeczywista, czyli taka kt??ra mo??e zawiera?? cz?????? u??amkow?? ??? dlatego rezultatem jest ???2.0???. </p>\r\n            <p>Liczby rzeczywiste w informatyce to zwykle tak zwane liczby zmiennoprzecinkowe (rzadziej u??ywane s?? bardziej specjalizowane typy jak liczby sta??oprzecinkowe czy dziesi??tne liczby zmiennoprzecinkowe). Zwr???? tak??e uwag?? na u??ywanie kropki zamiast przecinka ??? w j??zykach programowania zazwyczaj tak b??dzie.</p>\r\n            <p> <strong>    <img src="Theme/images/uwaga.png" alt=""/>Uwa??aj</strong> : to jest jedna ze zmian wprowadzonych w Pythonie 3. Wcze??niej (Python 2) otrzyma??by?? w rezultacie dzielenia ???8 / 4??? rezultat ???2???. </p>\r\n            <p>Domy??lasz si?? ju?? chyba, ??e mo??esz konstruuj??c wyra??enia te?? korzysta?? z liczb zmiennoprzecinkowych. Rezultatu dodawania dw??ch liczb zmiennoprzecinkowych ???2.0 + 2.0??? mo??esz si?? domy??la??:</p>\r\n            <code>>>> 2.0 + 2.0<br/>\r\n                4.0\r\n            </code>\r\n            <p>Doda??e?? dwie liczby zmiennoprzecinkowe wi??c rezultat jest te?? zmiennoprzecinkowy. Zwr???? jednak uwag??, ??e rezultatem wykonania operacji na liczbie ca??kowitej i zmiennoprzecinkowej b??dzie te?? liczba zmiennoprzecinkowa: </p>\r\n            <code>>>> 2.0 + 2<br/>\r\n                4.0\r\n            </code>\r\n            <p>Python w celu dodania dw??ch liczb r????nych typ??w (ca??kowitej i zmiennoprzecinkowej) musia?? je odpowiednio dostosowa?? ??? proces dostosowywania b??dziemy nazywa?? ???konwersj?????. Liczba ca??kowita ???2??? zosta??a wi??c przekonwertowana do bardziej pojemnego typu zmiennoprzecinkowego.</p>\r\n            <p> <img src="../Theme/images/info.png" alt=""/>Regu??y konwertowania s?? opisane szczeg????owo w definicji j??zyka i z czasem b??dziesz musia?? je pozna??.</p>', '', 'lesson', '', 'M1L1P4', 1, 1),
(8, '<p>Mo??esz te?? korzysta?? ze znanych z matematyki funkcji. Zobaczmy jakie kroki trzeba wykona?? na przyk??adzie trygonometrycznej funkcji sin().</p>\r\n            <p>Skorzystanie z funkcji wymaga jednego dodatkowego kroku ??? za??adowania odpowiedniej biblioteki (w terminologii Pythona b??dzie pos??ugiwa?? si?? poj??ciem modu??u). Czynno???? t?? wystarczy wykona?? raz w ka??dej sesji interpretera ??? potem mo??esz wielokrotnie wykorzystywa?? za??adowan?? bibliotek??.</p>\r\n            <p>  Dost??pno???? bibliotek jest jedn?? z g????wnych zalet Pythona, s?? one gotowymi klockami z kt??rych b??dziesz budowa?? swoje programy. G????wnym problemem jest oczywi??cie znalezienie odpowiedniej biblioteki i funkcji ??? z czasem b??dziesz pami??ta?? nazwy cz????ciej u??ywanych bibliotek, a w razie potrzeby odszukasz je w dokumentacji.</p>\r\n            <p>Funkcja sin() znajduje si?? w module o do???? oczywistej nazwie ???math???. ??eby za??adowa?? bibliotek?? wydajesz w interpreterze polecenie import z nazw?? potrzebnej biblioteki:</p>\r\n            <code>>>> import math</code>\r\n            <p>Zauwa??, ??e je??li wszystko p??jdzie dobrze nie otrzymasz ??adnych komunikat??w.</p>\r\n            <p> <strong>    <img src="Theme/images/uwaga.png" alt=""/>Uwa??aj: </strong>W Pythonie wielko???? liter jest istotna  ???  dlatego to ma znaczenie czy napiszesz math czy na przyk??ad Math. Sprawd?? co si?? stanie gdy wydasz polecenie ???import Math???.  </p>\r\n              </div>\r\n              <div class="page">\r\n            <p>Za??adowa??e?? bibliotek?? i jeste?? got??w do obliczenia warto??ci sinusa np. 90&deg. Sprawdzamy w dokumentacji jak musi by?? podany argument ??? funkcja sin() oczekuje radian??w. Musimy wi??c jako argument poda?? &pi;/2, ale spokojnie, nie musisz nawet pami??ta?? warto??ci typowych sta??ych matematycznych ??? r??wnie?? s?? dost??pne w bibliotece math. </p>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  Teraz mo??emy ju?? obliczy??<i> sin(&pi;/2)/ 4</i></p>\r\n            <code>>>> math.sin(math.pi / 2)<br/>\r\n                1.0\r\n            </code>\r\n            <p>Rezultat jest zgodny z oczekiwaniami. Rezultatem funkcji sinus mog?? by?? u??amki i dlatego rezultatem jest zawsze liczba rzeczywista, nawet je??li cz?????? u??amkowa jest zerem. </p>    \r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  Teraz mo??emy ju?? obliczy??<i> sin(0)</i></p>\r\n            <code>>> math.sin(0)<br/>0.0  </code>\r\n            <p> <strong>    <img src="Theme/images/uwaga.png" alt=""/>Uwa??aj: </strong>inaczej ni?? w matematyce, liczby 0 (to liczba ca??kowita) i 0.0 (to liczba zmiennoprzecinkowa) to nie to samo. </p>\r\n            <p>     <img src="../Theme/images/question.png" alt=""/>Sprawd?? co si?? stanie je??li w sesji interpretera nie za??adujesz biblioteki przed jej u??yciem ??? uruchom ponownie interpreter i spr??buj wy??wietli?? warto???? &pi;(math.pi).</p>', '', 'lesson', '', 'M1L1P5', 1, 1),
(9, '<p>Wykonuj??c z??o??one obliczenia na kalkulatorze czasami zapami??tujesz po??rednie wyniki oblicze?? u??ywaj??c do tego celu pami??ci kalkulatora. W programowaniu rol?? takiej pami??ci (tyle, ??e o znacznie wi??kszych mo??liwo??ciach) pe??ni?? zmienne. Zmienna to pojemnik na dane, w kt??rym mo??na zapami??ta?? warto??ci, a potem skorzysta?? z zapami??tanej warto??ci ??? wy??wietli?? albo u??y?? w obliczeniach.</p>\r\n            <p>Zacznijmy od zapami??tania warto??ci w zmiennej. Zmienna powstanie automatycznie przy jej pierwszym u??yciu a do nadania jej warto??ci u??yjemy operatora przypisania ???=??? (znak r??wno??ci z matematyki). Operator przypisania obliczy i skopiuje warto???? wyra??enia znajduj??cego si?? po jego prawej stronie do zmiennej znajduj??cej si?? po lewej stronie.</p>\r\n            <p> <img src="../Theme/images/info.png" alt=""/>Problem nazywania zmiennych jest wa??ny i tym wa??niejszy im d??u??szy b??dzie program. Wr??cimy do niego ale na razie przyjmijmy, ??e wystarcz?? nam ma??e litery.</p>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  Je??li chcesz stworzy?? dwie zmienne o nazwach x i y i nada?? im warto??ci odpowiednio 3 i 4 to wykonasz (w dowolnej kolejno??ci) dwie instrukcje:</p>\r\n            <code>\r\n                >>> x = 3</br>\r\n                >>> y = 4\r\n            </code>\r\n            <p>Hmmm, zadzia??a??o ? Interpreter nie zg??osi?? b????du wi??c pewnie tak ale ??? efektu nie wida??. U??yjmy naszych nowych zmiennych w wyra??eniu:</p>\r\n            <code>\r\n                >>> x * y<br/>\r\n                12\r\n            </code>\r\n            <p>A jednak dzia??a ! Interpreter pami??ta zmienne i warto??ci jakie im nadali??my.</p>\r\n            <p>Warto???? zmiennej mo??na wi??c odczyta?? u??ywaj??c jej w wyra??eniu. <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  mo??esz wy??wietli?? sam?? zmienn?? x w taki spos??b:</p>\r\n            <code>\r\n                >>> x + 0<br/>\r\n                3\r\n            </code>', '', 'lesson', '', 'M1L1P6', 1, 1),
(10, '<p> Jest jednak wygodniejsze i elastyczniejsze rozwi??zanie problemu wy??wietlania zmiennych, tekst??w i wyra??e?? ??? funkcja <i>print()</i>. W przeciwie??stwie do funkcji <i>sin()</i> nie musisz wykonywa?? ??adnych dodatkowych krok??w ??eby z niej skorzysta??. Jako parametry funkcji, w nawiasach okr??g??ych podajesz co ma by?? wypisane na ekranie.<br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> Wy??wietlmy warto???? zmiennej x: </p>\r\n            <code>\r\n                >>> print(x)<br/>\r\n                3\r\n\r\n            </code>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> A je??li chcia??by?? wy??wietli?? warto???? wyra??enia np. ???x + y + 1???:</p>\r\n            <code>\r\n                >>> print(x + y + 1)\r\n                8\r\n            </code>\r\n            <p>Umiemy ju?? wi??c nadawa?? warto??ci zmiennym, konstruowa?? wyra??enia i wy??wietla?? ich warto??ci.</p>', '', 'lesson', '', 'M1L1P7', 1, 1),
(11, '<p>Funkcj??<i> print()</i> mo??emy za jednym u??yciem wydrukowa?? wiele warto??ci. Na pocz??tek wydrukujmy w jednym wywo??aniu (uruchomieniu) obie zmienne.<br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> Rozdzielmy argumenty przecinkami i sprawd??my warto???? obu zmiennych:</p>\r\n            <code>\r\n                >>> print(x,y)<br/>\r\n                3 4\r\n\r\n            </code>\r\n\r\n            <p> Przyjrzyj si?? dok??adnie rezultatowi. Zauwa??, ??e poszczeg??lne wyprowadzane elementy s?? rozdzielone spacj?? ??? to jest domy??lny separator argument??w przy ich drukowaniu. Je??li chcia??by?? rozdzieli?? liczby innym separatorem, na przyk??ad znakiem podkre??lenia <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> to dodaj jako ostatni argument<i> sep</i> i przypisz mu po????dan?? warto???? separatora:</p>\r\n\r\n            <code>>>> print(x,y,sep="_")\r\n                3_4\r\n            </code>\r\n            <p> <img src="../Theme/images/info.png" alt=""/>Zauwa??, ??e znak podkre??lenia podajesz w cudzys??owie, ujmuj??c go w znaki "" (angielskie, a nie polskie ??????). Tak b??dziesz zapisywa?? teksty w programie.</p>', '', 'lesson', '', 'M1L1P8', 1, 1),
(12, '<p>     <img src="../Theme/images/question.png" alt=""/>Jeste??my gotowi do napisania bardziej przyjaznej wersji programu drukuj??cej zar??wno informacj?? o nazwie zmiennej jak i jej warto??ci. Je??eli chcia??by??, ??eby na wydruku pokaza??o si?? np. ???x=3, y=4??? to musisz odpowiednio zada?? argumenty funkcji <i>print()</i>:</p>\r\n            <ul>\r\n                <li>pierwszy od lewej jest tekst ???x=??? a zatem pierwszy parametr to "x=",</li>\r\n                <li>drugi to bie????ca warto???? zmiennej x czyli po prostu x,</li>\r\n                <li>trzeci to tekst sk??adaj??cy si?? z przecinka, spacji i ???y=??? czyli ", y=",</li>\r\n                <li>i na koniec wypiszemy bie????c?? warto???? y.</li>\r\n            </ul>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  Mo??emy od razu sprawdzi?? pomys??:></p>\r\n            <code>\r\n                >>> print("x=",x,", y=",y)<br/>\r\n                x= 3 , y= 4\r\n\r\n            </code>\r\n            <p>Dzia??a (prawie) idealnie ??? zauwa?? niechciane spacje mi??dzy cyfr?? 3 a przecinkiem, oraz mi??dzy ???=??? a cyfr?? 4. Wynikaj?? one ze sposobu dzia??ania funkcji print(), kt??ra zawsze dodaje pomi??dzy argumentami domy??lny separator czyli spacj??. Je??li chcesz aby pola nie by??y rozdzielane ??adnym znakiem <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> podaj jako warto???? separatora ??a??cuch pusty (""):</p>\r\n\r\n            <code>\r\n                >>> print("x=",x,", y=",y,sep="")<br/>\r\n                x=3, y=4\r\n\r\n            </code>\r\n            <p>Teraz efekt jest ca??kowicie zgodny z oczekiwaniami.</p>', '', 'lesson', '', 'M1L1P9', 1, 1),
(13, '<p>Warto??ci zmiennych mo??esz modyfikowa?? odwo??uj??c si?? do poprzednie warto??ci. <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong> Zacznijmy od nadania warto??ci zmiennej i powi??kszenia tej warto??ci o 1:</p>\r\n            <code>\r\n                >>> x = 3<br/>\r\n                >>> x = x + 1<br/>\r\n                >>> print(x)<br/>\r\n                4<br/>\r\n                >>>\r\n\r\n            </code>\r\n            <p>W pierwszym kroku nadali??my warto???? zmiennej. W drugim ??? odwo??uj??c si?? do jej aktualnej warto??ci (prawa strona operatora przypisania) nadali??my jej now?? warto???? na podstawie bie????cej.</p>\r\n\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawd??:</strong>  Mo??esz r??wnie?? nadawa?? warto???? zmiennej na podstawie innej zmiennej:</p>\r\n\r\n            <code>\r\n                >>> y=4<br/>\r\n                >>> x=y+2<br/>\r\n                >>> print(x,y)<br/>\r\n                6 4<br/>\r\n\r\n            </code>          \r\n            <p>Najpierw nadali??my warto???? zmiennej y, nast??pnie na podstawie jej warto??ci nadali??my warto???? zmiennej x. Zauwa??, ??e warto???? zmiennej y nie uleg??a zmianie.</p>', '', 'lesson', '', 'M1L1P10', 1, 1),
(14, '<h6>Gratulacje</h6>\r\n            <p>Masz ju?? teraz umiej??tno??ci potrzebne do samodzielnego napisaniu programu obliczaj??cego i drukuj??cego warto???? wyra??enia ((a^2+b))/???(a+b)???^2  . Zmienne a i b wprowadzisz tak, jak to robili??my w lekcji. </p>\r\n            <p>Nast??pnie obliczysz warto???? wyra??enia ??? mo??esz j?? od razu wydrukowa?? albo oblicza?? etapami i przechowa?? po??rednie rezultaty w pomocniczych zmiennych. Sprawd??, czy program dzia??a poprawnie np. dla a = 2 i b = 3 rezultatem powinno by?? 0.28.</p>\r\n            <p>Na koniec sprawd?? co si?? stanie je??li mianownik wyra??enia b??dzie mia?? warto???? 0 (np. a = 3 i b = -3).</p>\r\n            <a class="helper"> <img src="../Theme/images/info.png" alt=""/>Przyk??adowe rozwi??zanie</a>\r\n            <code class="helper_code">>>> a=2<br/>\r\n>>> b=3<br/>\r\n>>> print( (a*a+b) / ((a+b)*(a+b)))\r\n            </code>', '', 'lesson', '', 'M1L1P11', 1, 1),
(15, '', '', 'lesson', '', 'Hello World', 0, 1),
(16, '<h4><strong>Czego nauczysz si?? w tej lekcji:</strong></h4>\r\n            <p>Programowania</p>\r\n            <h5><strong>Wielko???? liter</strong></h5>\r\n                <p>Python uwzgl??dnia wielko???? liter a wi??c ma to znaczenie czy napiszesz:</p>\r\n                <code>print("Hello")</code>\r\n                <p>czy</p>\r\n                <code>Print("Hello")</code>', '', 'lesson', '', 'M1L2P1', 15, 1),
(17, '<h5><strong>Problem nazewnictwa</strong></h5>\r\n                <p>W Pythonie mo??na u??ywa?? znak??w narodowych zgodnie ze standardem Unicode czyli mo??esz np. zdefiniowa?? zmienn?? o nazwie ????danie (request) i pominiesz polskie litery (czasami widuje si?? takie praktyki), co otrzymasz ??? zadanie (task). Ta nazwa ju?? nie opisuje dobrze celu jej stosowania</p>\r\n                <p>co pozwala unikn???? naginania angielskiej gramatyki i tworzenie p???? polskich p??l angielskich nowotwor??w. W swoim rozwoju jako programista przekonasz si?? jednak ??e znajomo???? j??zyka angielskiego ze wzgl??du na dost??p do ??r??de?? (ksi????ki, listy dyskusyjne) jest konieczno??ci?? ograniczymy si?? do angielskich nazw zmiennych. Wyobra?? sobie, ??e znalaz??by?? potrzebn?? ci bibliotek?? w j??zyku korea??skim. Uzyska??by?? teraz tr??jj??zyczn?? mieszank?? nazw polskich-korea??skich-angielskich.</p>\r\n                <p>Wywo??ania print i Print odnosz?? si?? dw??ch r????nych funkcji.</p>', '', 'lesson', '', 'M1L2P2', 15, 1),
(18, '<p>Na marginesie:</p>\r\n                <p>Nadawanie dw??m r????nym bytom (np. zmiennym) nazw r????ni??cych si?? tylko wielko??ci?? liter jest kiepskim stylem zmusi Ci?? kiedy?? do wyt????enia wzroku i poszukiwania trudnych do znalezienia b????d??w. Je??eli chcesz sobie bardzo utrudni?? ??ycie w przysz??o??ci to zauwa??, ??e wszystkie nazwy poni??ej s?? inne:</p>\r\n                <code>a0, AO, aO, ai, AI, A1</code>\r\n                <p>Najlepiej nadawa?? zmiennym nazwy opisuj??ce cel ich stosowania. Ta zasady jest tym wa??niejsza im wi??cej linii programu korzysta z danej nazwy.</p>\r\n                <p>To wa??ne ??? Python jest j??zykiem, kt??rego si??a w du??ym stopniu opiera si?? na przestrzeganiu konwencji.</p>', '', 'lesson', '', 'M1L2P3', 15, 1),
(19, '<h5><strong>Spacje/wci??cia</strong></h5>\r\n                <p>W przyk??adach zastosuj?? si?? PEP 8 (przewodnika stylu kodu Pythona) i b??d?? stosowa?? wci??cia 4 spacjami ale spotkasz si?? z r????nymi stylami 2 spacjami (bo 4 s?? za bardzo rozwlek??e), tabulatory. Za ka??dym stylem stoi jaka?? motywacja (a czasami niewiedza). Dlaczego warto stosowa?? si?? do standardu skoro dzia??a tak czy inaczej. Kiedy b??dziesz konstruowa?? du??e systemy i integrowa?? kawa??ki kodu pochodz??ce od r????nych programist??w i firm zobaczysz jak bardzo uci????liwe jest nie trzymanie si?? standard??w.</p>', '', 'lesson', '', 'M1L2P4', 15, 1),
(20, '<h5><strong>Komentarze</strong></h5>\r\n                <p>?</p>', '', 'lesson', '', 'M1L2P5', 15, 1),
(21, '', '', 'lesson', '', 'Lancuchy Tekstu', 0, 1),
(22, '<h4><strong>Czego nauczysz si?? w tej lekcji:</strong></h4>\r\n    <p>Jak uruchomi?? ??rodowisko, wpisa?? i uruchomi?? program w Pythonie</p>\r\n    <h4><strong>??a??cuchy tekstu</strong></h4>\r\n    <p>Tematem tej lekcji b??d?? ??a??cuchy tekstu. ??a??cuch tekstu to ci??g znak??w. ??a??cuch mo??e mie?? dowoln?? d??ugo???? i zawiera?? znaki specjalne takie jak znak ko??ca linii (\\n), tabulator (\\t) czy dzwonek (\\a).</p>\r\n    <h4><strong>Konkatenacja ??a??cuch??w</strong></h4>\r\n    <p>Konkatenacja ??a??cuch??w to ich ????czenie w celu utworzenia nowego pojedynczego ??a??cucha. </p>', '', 'lesson', '', 'M1L3P1', 21, 1),
(23, '<p>Do ????czenia ??a??cuch??w wykorzystamy znany ju?? nam operator dodawania ???+???. Nowy ??a??cuch mo??emy utworzy?? dodaj??c do siebie dowoln?? liczb?? ??a??cuch??w operatorem ???+???. W wyniku wykonania konkatencji:</p>\r\n    <code>"Ala " + "ma kota"</code>\r\n    <p>otrzymamy, zgodnie z intuicj??, ??a??cuch wynikowy:</p>\r\n    <code>Ala ma kota</code>\r\n    <p>Argumentami konkatenacji mog?? by?? oczywi??cie r??wnie?? zmienne. Wprowad?? poni??sze instrukcje:</p>\r\n    <code>  name = "Ala"</br>\r\n            primer = name + " ma kota"\r\n    </code>\r\n    <p>i sprawd?? (print(name)), ??e zmienna name ma teraz warto????:</p>\r\n    <code>Ala</code>\r\n    <p>a zmienna primer (print(primer)):</p>\r\n    <code>Ala ma kota</code>', '', 'lesson', '', 'M1L3P2', 21, 1),
(24, '<p>Mo??esz r??wnie?? konstruowa?? ??a??cuch krok po kroku:</p>\r\n    <code>  Primer = "Ala"</br>\r\n            primer = primer + " "</br>\r\n            primer = primer + "ma"</br>\r\n            primer = primer + " "</br>\r\n            primer = primer + "kota"\r\n    </code>\r\n    <p>i oczywi??cie wykorzysta?? operator skr??conego dodawania uzyskuj??c ten sam efekt mniejsz?? obj??to??ci?? kodu:</p>\r\n    <code>  primer = "Ala"</br>\r\n            primer += " "</br>\r\n            primer += "ma"</br>\r\n            primer += " "</br>\r\n            primer += "kota"\r\n    </code>', '', 'lesson', '', 'M1L3P3', 21, 1),
(25, '<p>Je??eli operator dodawania konkatenuje ??a??cuchy to co mo??e robi?? operator mno??enia: co uzyskamy mno????c ??a??cuch prze liczb?? ? To te?? jest do???? zgodne z intuicj??, skoro operator mno??enia zwielokrotnia to powielimy ??a??cuch ??r??d??owy zadan?? liczb?? razy. Sprawd?? intuicj?? wykonuj??c instrukcj??:</p>\r\n    <code>text = "a"*3 + "b"*2</code>\r\n    <p>wpiszesz do zmiennej text ??a??cuch:</p>\r\n    <code>aaabb</code>\r\n    <p>??a??cuchy mo??esz oczywi??cie przechowywa?? w zmiennych. Ten program:</p>\r\n    <code>  text_a = "a"</br>\r\n            text_b = "b"</br>\r\n            text = text_a*3 + text_b*2\r\n    </code>\r\n    <p>r??wnie?? wpisze do zmiennej text ??a??cuch:</p>\r\n    <code>aaabb</code>\r\n    <p>Ale<strong><img src="Theme/images/uwaga.png" alt=""/>uwaga:</strong>??a??cuch??w przez siebie nie mo??na mno??y??. Zreszt??, jaki mia??by by?? efekt mno??enia:</p>\r\n    <code>"Ala" * "kot"</code>', '', 'lesson', '', 'M1L3P4', 21, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `type` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `surname` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=3 ;

--
-- Zrzut danych tabeli `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `type`, `name`, `surname`) VALUES
(1, 'test', '168a65b2b2a0d1882ef2a5d13cbcb25e', 'user', 'Jan', 'Kowalski'),
(2, 'admin', '168a65b2b2a0d1882ef2a5d13cbcb25e', 'admin', 'Imie', 'Nazwisko');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
