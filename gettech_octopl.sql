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
(1, 0, 'Python', 'Kurs języka Python', 'Kurs języka Python');

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
(3, 'dialog_input_password', 'all', 'Hasło'),
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
(1, 0, 1, 'lesson', 'Wprowadzenie: praca w trybie interaktywnym', 'Czego nauczysz się w tej lekcji:\r\nWykorzystywania interpretera Pythona w trybie interaktywnym do wykonywania obliczeń i pisania bardzo prostych programów.\r\n'),
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
(4, '<h4>  <strong>Czego nauczysz się w tej lekcji:</strong></h4>\r\n            <p>Wykorzystywania interpretera Pythona w trybie interaktywnym do wykonywania obliczeń i pisania bardzo prostych programów. </p>\r\n            <h5><strong>Tryb interaktywny</strong></h5>\r\n            <p>Rozpocznij od uruchomienia zintegrowanego środowiska Pythona czyli programu IDLE (w systemie Windows służy do tego skrót, w Linuxie wydaj polecenie idle3). Na ekranie zobaczysz obraz zbliżony do takiego (Windows):</p>\r\n            <code>\r\n                Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 25 2016, 22:01:18) [MSC v.1900 32 bit (Intel)] on win32<br/>\r\n                Type "copyright", "credits" or "license()" for more information.<br/>\r\n                >>>\r\n            </code>\r\n            <p>albo takiego (Linux):</p>\r\n            <code>\r\n                Python 3.3.0 (default, Oct 01 2012, 09:13:30) [GCC] on linux<br/>\r\n                Type "help", "copyright", "credits" or "license" for more information.<br/>\r\n                >>>\r\n            </code>\r\n            <p>Uruchamiając interpreter zawsze zwracaj uwagę na pierwszą linię. Prawdopodobnie będziesz miał inny numer wersji ale musi to być wersja 3.coś a nie 2.coś (Python 2 to starsza wersja języka nadal używana i popularna ale różniąca się od aktualnej – 3).</p>\r\n            <p> W linii zawierającej znak zachęty <i>>>></i>  wprowadzasz instrukcje, które po zatwierdzeniu klawiszem <i>Enter </i>będą natychmiast przetwarzane przez interpreter. Sesję interpretera zamkniesz wprowadzając z klawiatury<i> Ctrl-D</i>.  </p>', '', 'lesson', '', 'M1L1P1', 1, 1),
(5, '<p> Zacznijmy od wykorzystania <i>Pythona </i> jako zaawansowanego kalkulatora. Najbardziej oczywistym testem kalkulatora jest chyba wprowadzenie wyrażenia <i>„2+2”</i>.  </p>\r\n            <p><strong><img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> wprowadź <i>„2+2”</i>, ewentualnie dodając dla czytelności spacje rozdzielające (nie mają wpływu na wynik) i zatwierdź klawiszem <i>Enter (Return)</i>. Powinieneś zobaczyć następujący efekt: </p>\r\n            <code>\r\n                >>> 2 + 2<br/>\r\n                4<br/>\r\n                >>>\r\n            </code>\r\n            <p>Interpreter wykonał obliczenia, wyświetlił wynik (zgodnie z oczekiwaniami to 4) i jest gotowy do dalszej pracy – wyświetla znak zachęty<i> „>>>”</i>.</p>\r\n            <p>Możesz oczywiście wykonywać również bardziej złożone obliczenia – reguły konstruowania wyrażeń są tutaj podobne jak w matematyce. Możesz używać operatorów i nawiasów: sprawdź wprowadzając bardziej skomplikowane wyrażenie:</p>\r\n            <code>\r\n                >>> 2 * (3 + 4)</br>\r\n                14\r\n            </code>', '', 'lesson', '', 'M1L1P2', 1, 1),
(6, '<p> Reguły dotyczące priorytetów i wiązań w wyrażeniach arytmetycznych będą podobne jak w matematyce. <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> wprowadź testowe wyrażenie nie zawierające nawiasów i użyj operatorów mnożenia<i> „*”</i> i dodawania <i>„+”</i>: </p>\r\n            <code>>>> 2 + 3 * 4<br/>\r\n                14\r\n            </code>\r\n            <p>Zgodnie z matematycznymi regułami najpierw zostało wykonane mnożenie (wyższy priorytet) 3 * 4 = 12 a następnie dodawanie 2 + 12 = 14.</p>\r\n            <p>  Przyjrzyjmy się teraz działaniu operatora dzielenia – w programach nie używa się klasycznej poziomej kreski ułamkowej (-) ani obelusa (_) tylko znaku „/”.<br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  wprowadź wyrażenie<i> „8 / 4”</i>: </p>\r\n            <code>>>> 8 / 4<br/>\r\n                2.0\r\n            </code>\r\n            <p> Rezultat jest (w zasadzie) zgodny z oczekiwaniami. Może Cię jednak zastanawiać dlaczego w odpowiedzi dostałeś tym razem <i>„2.0”</i> a nie tylko <i>„2”</i>. Przecież, podobnie jak we wcześniejszych testach, argumentami operacji arytmetycznej były liczby całkowite (czyli nie posiadające części ułamkowej). </p>', '', 'lesson', '', 'M1L1P3', 1, 1),
(7, '<p> W przeciwieństwie do dodawania i mnożenia wykonywanego na liczbach całkowitych Python przyjmuje, że rezultatem operacji dzielenia zawsze jest liczba rzeczywista, czyli taka która może zawierać część ułamkową – dlatego rezultatem jest „2.0”. </p>\r\n            <p>Liczby rzeczywiste w informatyce to zwykle tak zwane liczby zmiennoprzecinkowe (rzadziej używane są bardziej specjalizowane typy jak liczby stałoprzecinkowe czy dziesiętne liczby zmiennoprzecinkowe). Zwróć także uwagę na używanie kropki zamiast przecinka – w językach programowania zazwyczaj tak będzie.</p>\r\n            <p> <strong>    <img src="Theme/images/uwaga.png" alt=""/>Uważaj</strong> : to jest jedna ze zmian wprowadzonych w Pythonie 3. Wcześniej (Python 2) otrzymałbyś w rezultacie dzielenia „8 / 4” rezultat „2”. </p>\r\n            <p>Domyślasz się już chyba, że możesz konstruując wyrażenia też korzystać z liczb zmiennoprzecinkowych. Rezultatu dodawania dwóch liczb zmiennoprzecinkowych „2.0 + 2.0” możesz się domyślać:</p>\r\n            <code>>>> 2.0 + 2.0<br/>\r\n                4.0\r\n            </code>\r\n            <p>Dodałeś dwie liczby zmiennoprzecinkowe więc rezultat jest też zmiennoprzecinkowy. Zwróć jednak uwagę, że rezultatem wykonania operacji na liczbie całkowitej i zmiennoprzecinkowej będzie też liczba zmiennoprzecinkowa: </p>\r\n            <code>>>> 2.0 + 2<br/>\r\n                4.0\r\n            </code>\r\n            <p>Python w celu dodania dwóch liczb różnych typów (całkowitej i zmiennoprzecinkowej) musiał je odpowiednio dostosować – proces dostosowywania będziemy nazywać „konwersją”. Liczba całkowita „2” została więc przekonwertowana do bardziej pojemnego typu zmiennoprzecinkowego.</p>\r\n            <p> <img src="../Theme/images/info.png" alt=""/>Reguły konwertowania są opisane szczegółowo w definicji języka i z czasem będziesz musiał je poznać.</p>', '', 'lesson', '', 'M1L1P4', 1, 1),
(8, '<p>Możesz też korzystać ze znanych z matematyki funkcji. Zobaczmy jakie kroki trzeba wykonać na przykładzie trygonometrycznej funkcji sin().</p>\r\n            <p>Skorzystanie z funkcji wymaga jednego dodatkowego kroku – załadowania odpowiedniej biblioteki (w terminologii Pythona będzie posługiwać się pojęciem modułu). Czynność tą wystarczy wykonać raz w każdej sesji interpretera – potem możesz wielokrotnie wykorzystywać załadowaną bibliotekę.</p>\r\n            <p>  Dostępność bibliotek jest jedną z głównych zalet Pythona, są one gotowymi klockami z których będziesz budował swoje programy. Głównym problemem jest oczywiście znalezienie odpowiedniej biblioteki i funkcji – z czasem będziesz pamiętał nazwy częściej używanych bibliotek, a w razie potrzeby odszukasz je w dokumentacji.</p>\r\n            <p>Funkcja sin() znajduje się w module o dość oczywistej nazwie „math”. Żeby załadować bibliotekę wydajesz w interpreterze polecenie import z nazwą potrzebnej biblioteki:</p>\r\n            <code>>>> import math</code>\r\n            <p>Zauważ, że jeśli wszystko pójdzie dobrze nie otrzymasz żadnych komunikatów.</p>\r\n            <p> <strong>    <img src="Theme/images/uwaga.png" alt=""/>Uważaj: </strong>W Pythonie wielkość liter jest istotna  –  dlatego to ma znaczenie czy napiszesz math czy na przykład Math. Sprawdź co się stanie gdy wydasz polecenie „import Math”.  </p>\r\n              </div>\r\n              <div class="page">\r\n            <p>Załadowałeś bibliotekę i jesteś gotów do obliczenia wartości sinusa np. 90&deg. Sprawdzamy w dokumentacji jak musi być podany argument – funkcja sin() oczekuje radianów. Musimy więc jako argument podać &pi;/2, ale spokojnie, nie musisz nawet pamiętać wartości typowych stałych matematycznych – również są dostępne w bibliotece math. </p>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  Teraz możemy już obliczyć<i> sin(&pi;/2)/ 4</i></p>\r\n            <code>>>> math.sin(math.pi / 2)<br/>\r\n                1.0\r\n            </code>\r\n            <p>Rezultat jest zgodny z oczekiwaniami. Rezultatem funkcji sinus mogą być ułamki i dlatego rezultatem jest zawsze liczba rzeczywista, nawet jeśli część ułamkowa jest zerem. </p>    \r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  Teraz możemy już obliczyć<i> sin(0)</i></p>\r\n            <code>>> math.sin(0)<br/>0.0  </code>\r\n            <p> <strong>    <img src="Theme/images/uwaga.png" alt=""/>Uważaj: </strong>inaczej niż w matematyce, liczby 0 (to liczba całkowita) i 0.0 (to liczba zmiennoprzecinkowa) to nie to samo. </p>\r\n            <p>     <img src="../Theme/images/question.png" alt=""/>Sprawdź co się stanie jeśli w sesji interpretera nie załadujesz biblioteki przed jej użyciem – uruchom ponownie interpreter i spróbuj wyświetlić wartość &pi;(math.pi).</p>', '', 'lesson', '', 'M1L1P5', 1, 1),
(9, '<p>Wykonując złożone obliczenia na kalkulatorze czasami zapamiętujesz pośrednie wyniki obliczeń używając do tego celu pamięci kalkulatora. W programowaniu rolę takiej pamięci (tyle, że o znacznie większych możliwościach) pełnią zmienne. Zmienna to pojemnik na dane, w którym można zapamiętać wartości, a potem skorzystać z zapamiętanej wartości – wyświetlić albo użyć w obliczeniach.</p>\r\n            <p>Zacznijmy od zapamiętania wartości w zmiennej. Zmienna powstanie automatycznie przy jej pierwszym użyciu a do nadania jej wartości użyjemy operatora przypisania „=” (znak równości z matematyki). Operator przypisania obliczy i skopiuje wartość wyrażenia znajdującego się po jego prawej stronie do zmiennej znajdującej się po lewej stronie.</p>\r\n            <p> <img src="../Theme/images/info.png" alt=""/>Problem nazywania zmiennych jest ważny i tym ważniejszy im dłuższy będzie program. Wrócimy do niego ale na razie przyjmijmy, że wystarczą nam małe litery.</p>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  Jeśli chcesz stworzyć dwie zmienne o nazwach x i y i nadać im wartości odpowiednio 3 i 4 to wykonasz (w dowolnej kolejności) dwie instrukcje:</p>\r\n            <code>\r\n                >>> x = 3</br>\r\n                >>> y = 4\r\n            </code>\r\n            <p>Hmmm, zadziałało ? Interpreter nie zgłosił błędu więc pewnie tak ale … efektu nie widać. Użyjmy naszych nowych zmiennych w wyrażeniu:</p>\r\n            <code>\r\n                >>> x * y<br/>\r\n                12\r\n            </code>\r\n            <p>A jednak działa ! Interpreter pamięta zmienne i wartości jakie im nadaliśmy.</p>\r\n            <p>Wartość zmiennej można więc odczytać używając jej w wyrażeniu. <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  możesz wyświetlić samą zmienną x w taki sposób:</p>\r\n            <code>\r\n                >>> x + 0<br/>\r\n                3\r\n            </code>', '', 'lesson', '', 'M1L1P6', 1, 1),
(10, '<p> Jest jednak wygodniejsze i elastyczniejsze rozwiązanie problemu wyświetlania zmiennych, tekstów i wyrażeń – funkcja <i>print()</i>. W przeciwieństwie do funkcji <i>sin()</i> nie musisz wykonywać żadnych dodatkowych kroków żeby z niej skorzystać. Jako parametry funkcji, w nawiasach okrągłych podajesz co ma być wypisane na ekranie.<br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> Wyświetlmy wartość zmiennej x: </p>\r\n            <code>\r\n                >>> print(x)<br/>\r\n                3\r\n\r\n            </code>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> A jeśli chciałbyś wyświetlić wartość wyrażenia np. „x + y + 1”:</p>\r\n            <code>\r\n                >>> print(x + y + 1)\r\n                8\r\n            </code>\r\n            <p>Umiemy już więc nadawać wartości zmiennym, konstruować wyrażenia i wyświetlać ich wartości.</p>', '', 'lesson', '', 'M1L1P7', 1, 1),
(11, '<p>Funkcją<i> print()</i> możemy za jednym użyciem wydrukować wiele wartości. Na początek wydrukujmy w jednym wywołaniu (uruchomieniu) obie zmienne.<br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> Rozdzielmy argumenty przecinkami i sprawdźmy wartość obu zmiennych:</p>\r\n            <code>\r\n                >>> print(x,y)<br/>\r\n                3 4\r\n\r\n            </code>\r\n\r\n            <p> Przyjrzyj się dokładnie rezultatowi. Zauważ, że poszczególne wyprowadzane elementy są rozdzielone spacją – to jest domyślny separator argumentów przy ich drukowaniu. Jeśli chciałbyś rozdzielić liczby innym separatorem, na przykład znakiem podkreślenia <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> to dodaj jako ostatni argument<i> sep</i> i przypisz mu pożądaną wartość separatora:</p>\r\n\r\n            <code>>>> print(x,y,sep="_")\r\n                3_4\r\n            </code>\r\n            <p> <img src="../Theme/images/info.png" alt=""/>Zauważ, że znak podkreślenia podajesz w cudzysłowie, ujmując go w znaki "" (angielskie, a nie polskie „”). Tak będziesz zapisywał teksty w programie.</p>', '', 'lesson', '', 'M1L1P8', 1, 1),
(12, '<p>     <img src="../Theme/images/question.png" alt=""/>Jesteśmy gotowi do napisania bardziej przyjaznej wersji programu drukującej zarówno informację o nazwie zmiennej jak i jej wartości. Jeżeli chciałbyś, żeby na wydruku pokazało się np. „x=3, y=4” to musisz odpowiednio zadać argumenty funkcji <i>print()</i>:</p>\r\n            <ul>\r\n                <li>pierwszy od lewej jest tekst „x=” a zatem pierwszy parametr to "x=",</li>\r\n                <li>drugi to bieżąca wartość zmiennej x czyli po prostu x,</li>\r\n                <li>trzeci to tekst składający się z przecinka, spacji i „y=” czyli ", y=",</li>\r\n                <li>i na koniec wypiszemy bieżącą wartość y.</li>\r\n            </ul>\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  Możemy od razu sprawdzić pomysł:></p>\r\n            <code>\r\n                >>> print("x=",x,", y=",y)<br/>\r\n                x= 3 , y= 4\r\n\r\n            </code>\r\n            <p>Działa (prawie) idealnie – zauważ niechciane spacje między cyfrą 3 a przecinkiem, oraz między „=” a cyfrą 4. Wynikają one ze sposobu działania funkcji print(), która zawsze dodaje pomiędzy argumentami domyślny separator czyli spację. Jeśli chcesz aby pola nie były rozdzielane żadnym znakiem <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> podaj jako wartość separatora łańcuch pusty (""):</p>\r\n\r\n            <code>\r\n                >>> print("x=",x,", y=",y,sep="")<br/>\r\n                x=3, y=4\r\n\r\n            </code>\r\n            <p>Teraz efekt jest całkowicie zgodny z oczekiwaniami.</p>', '', 'lesson', '', 'M1L1P9', 1, 1),
(13, '<p>Wartości zmiennych możesz modyfikować odwołując się do poprzednie wartości. <br/><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong> Zacznijmy od nadania wartości zmiennej i powiększenia tej wartości o 1:</p>\r\n            <code>\r\n                >>> x = 3<br/>\r\n                >>> x = x + 1<br/>\r\n                >>> print(x)<br/>\r\n                4<br/>\r\n                >>>\r\n\r\n            </code>\r\n            <p>W pierwszym kroku nadaliśmy wartość zmiennej. W drugim – odwołując się do jej aktualnej wartości (prawa strona operatora przypisania) nadaliśmy jej nową wartość na podstawie bieżącej.</p>\r\n\r\n            <p><strong>    <img src="Theme/images/check-square.png" alt=""/>Sprawdź:</strong>  Możesz również nadawać wartość zmiennej na podstawie innej zmiennej:</p>\r\n\r\n            <code>\r\n                >>> y=4<br/>\r\n                >>> x=y+2<br/>\r\n                >>> print(x,y)<br/>\r\n                6 4<br/>\r\n\r\n            </code>          \r\n            <p>Najpierw nadaliśmy wartość zmiennej y, następnie na podstawie jej wartości nadaliśmy wartość zmiennej x. Zauważ, że wartość zmiennej y nie uległa zmianie.</p>', '', 'lesson', '', 'M1L1P10', 1, 1),
(14, '<h6>Gratulacje</h6>\r\n            <p>Masz już teraz umiejętności potrzebne do samodzielnego napisaniu programu obliczającego i drukującego wartość wyrażenia ((a^2+b))/〖(a+b)〗^2  . Zmienne a i b wprowadzisz tak, jak to robiliśmy w lekcji. </p>\r\n            <p>Następnie obliczysz wartość wyrażenia – możesz ją od razu wydrukować albo obliczać etapami i przechować pośrednie rezultaty w pomocniczych zmiennych. Sprawdź, czy program działa poprawnie np. dla a = 2 i b = 3 rezultatem powinno być 0.28.</p>\r\n            <p>Na koniec sprawdź co się stanie jeśli mianownik wyrażenia będzie miał wartość 0 (np. a = 3 i b = -3).</p>\r\n            <a class="helper"> <img src="../Theme/images/info.png" alt=""/>Przykładowe rozwiązanie</a>\r\n            <code class="helper_code">>>> a=2<br/>\r\n>>> b=3<br/>\r\n>>> print( (a*a+b) / ((a+b)*(a+b)))\r\n            </code>', '', 'lesson', '', 'M1L1P11', 1, 1),
(15, '', '', 'lesson', '', 'Hello World', 0, 1),
(16, '<h4><strong>Czego nauczysz się w tej lekcji:</strong></h4>\r\n            <p>Programowania</p>\r\n            <h5><strong>Wielkość liter</strong></h5>\r\n                <p>Python uwzględnia wielkość liter a więc ma to znaczenie czy napiszesz:</p>\r\n                <code>print("Hello")</code>\r\n                <p>czy</p>\r\n                <code>Print("Hello")</code>', '', 'lesson', '', 'M1L2P1', 15, 1),
(17, '<h5><strong>Problem nazewnictwa</strong></h5>\r\n                <p>W Pythonie można używać znaków narodowych zgodnie ze standardem Unicode czyli możesz np. zdefiniować zmienną o nazwie żądanie (request) i pominiesz polskie litery (czasami widuje się takie praktyki), co otrzymasz – zadanie (task). Ta nazwa już nie opisuje dobrze celu jej stosowania</p>\r\n                <p>co pozwala uniknąć naginania angielskiej gramatyki i tworzenie pół polskich pól angielskich nowotworów. W swoim rozwoju jako programista przekonasz się jednak że znajomość języka angielskiego ze względu na dostęp do źródeł (książki, listy dyskusyjne) jest koniecznością ograniczymy się do angielskich nazw zmiennych. Wyobraź sobie, że znalazłbyś potrzebną ci bibliotekę w języku koreańskim. Uzyskałbyś teraz trójjęzyczną mieszankę nazw polskich-koreańskich-angielskich.</p>\r\n                <p>Wywołania print i Print odnoszą się dwóch różnych funkcji.</p>', '', 'lesson', '', 'M1L2P2', 15, 1),
(18, '<p>Na marginesie:</p>\r\n                <p>Nadawanie dwóm różnym bytom (np. zmiennym) nazw różniących się tylko wielkością liter jest kiepskim stylem zmusi Cię kiedyś do wytężenia wzroku i poszukiwania trudnych do znalezienia błędów. Jeżeli chcesz sobie bardzo utrudnić życie w przyszłości to zauważ, że wszystkie nazwy poniżej są inne:</p>\r\n                <code>a0, AO, aO, ai, AI, A1</code>\r\n                <p>Najlepiej nadawać zmiennym nazwy opisujące cel ich stosowania. Ta zasady jest tym ważniejsza im więcej linii programu korzysta z danej nazwy.</p>\r\n                <p>To ważne – Python jest językiem, którego siła w dużym stopniu opiera się na przestrzeganiu konwencji.</p>', '', 'lesson', '', 'M1L2P3', 15, 1),
(19, '<h5><strong>Spacje/wcięcia</strong></h5>\r\n                <p>W przykładach zastosuję się PEP 8 (przewodnika stylu kodu Pythona) i będę stosował wcięcia 4 spacjami ale spotkasz się z różnymi stylami 2 spacjami (bo 4 są za bardzo rozwlekłe), tabulatory. Za każdym stylem stoi jakaś motywacja (a czasami niewiedza). Dlaczego warto stosować się do standardu skoro działa tak czy inaczej. Kiedy będziesz konstruował duże systemy i integrował kawałki kodu pochodzące od różnych programistów i firm zobaczysz jak bardzo uciążliwe jest nie trzymanie się standardów.</p>', '', 'lesson', '', 'M1L2P4', 15, 1),
(20, '<h5><strong>Komentarze</strong></h5>\r\n                <p>?</p>', '', 'lesson', '', 'M1L2P5', 15, 1),
(21, '', '', 'lesson', '', 'Lancuchy Tekstu', 0, 1),
(22, '<h4><strong>Czego nauczysz się w tej lekcji:</strong></h4>\r\n    <p>Jak uruchomić środowisko, wpisać i uruchomić program w Pythonie</p>\r\n    <h4><strong>Łańcuchy tekstu</strong></h4>\r\n    <p>Tematem tej lekcji będą łańcuchy tekstu. Łańcuch tekstu to ciąg znaków. Łańcuch może mieć dowolną długość i zawierać znaki specjalne takie jak znak końca linii (\\n), tabulator (\\t) czy dzwonek (\\a).</p>\r\n    <h4><strong>Konkatenacja łańcuchów</strong></h4>\r\n    <p>Konkatenacja łańcuchów to ich łączenie w celu utworzenia nowego pojedynczego łańcucha. </p>', '', 'lesson', '', 'M1L3P1', 21, 1),
(23, '<p>Do łączenia łańcuchów wykorzystamy znany już nam operator dodawania ‘+’. Nowy łańcuch możemy utworzyć dodając do siebie dowolną liczbę łańcuchów operatorem ‘+’. W wyniku wykonania konkatencji:</p>\r\n    <code>"Ala " + "ma kota"</code>\r\n    <p>otrzymamy, zgodnie z intuicją, łańcuch wynikowy:</p>\r\n    <code>Ala ma kota</code>\r\n    <p>Argumentami konkatenacji mogą być oczywiście również zmienne. Wprowadź poniższe instrukcje:</p>\r\n    <code>  name = "Ala"</br>\r\n            primer = name + " ma kota"\r\n    </code>\r\n    <p>i sprawdź (print(name)), że zmienna name ma teraz wartość:</p>\r\n    <code>Ala</code>\r\n    <p>a zmienna primer (print(primer)):</p>\r\n    <code>Ala ma kota</code>', '', 'lesson', '', 'M1L3P2', 21, 1),
(24, '<p>Możesz również konstruować łańcuch krok po kroku:</p>\r\n    <code>  Primer = "Ala"</br>\r\n            primer = primer + " "</br>\r\n            primer = primer + "ma"</br>\r\n            primer = primer + " "</br>\r\n            primer = primer + "kota"\r\n    </code>\r\n    <p>i oczywiście wykorzystać operator skróconego dodawania uzyskując ten sam efekt mniejszą objętością kodu:</p>\r\n    <code>  primer = "Ala"</br>\r\n            primer += " "</br>\r\n            primer += "ma"</br>\r\n            primer += " "</br>\r\n            primer += "kota"\r\n    </code>', '', 'lesson', '', 'M1L3P3', 21, 1),
(25, '<p>Jeżeli operator dodawania konkatenuje łańcuchy to co może robić operator mnożenia: co uzyskamy mnożąc łańcuch prze liczbę ? To też jest dość zgodne z intuicją, skoro operator mnożenia zwielokrotnia to powielimy łańcuch źródłowy zadaną liczbę razy. Sprawdź intuicję wykonując instrukcję:</p>\r\n    <code>text = "a"*3 + "b"*2</code>\r\n    <p>wpiszesz do zmiennej text łańcuch:</p>\r\n    <code>aaabb</code>\r\n    <p>łańcuchy możesz oczywiście przechowywać w zmiennych. Ten program:</p>\r\n    <code>  text_a = "a"</br>\r\n            text_b = "b"</br>\r\n            text = text_a*3 + text_b*2\r\n    </code>\r\n    <p>również wpisze do zmiennej text łańcuch:</p>\r\n    <code>aaabb</code>\r\n    <p>Ale<strong><img src="Theme/images/uwaga.png" alt=""/>uwaga:</strong>łańcuchów przez siebie nie można mnożyć. Zresztą, jaki miałby być efekt mnożenia:</p>\r\n    <code>"Ala" * "kot"</code>', '', 'lesson', '', 'M1L3P4', 21, 1);

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
