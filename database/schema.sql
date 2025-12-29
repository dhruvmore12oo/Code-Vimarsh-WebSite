-- SQL Script for Code Vimarsh Club Database

-- Drop tables if they exist to ensure a clean start
DROP TABLE IF EXISTS `events`;
DROP TABLE IF EXISTS `members`;
DROP TABLE IF EXISTS `user`;

-- Table for Users
CREATE TABLE `user` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL UNIQUE,
    `email` VARCHAR(255) NOT NULL UNIQUE,
    `password` VARCHAR(255) NOT NULL
);

-- Table for Events
CREATE TABLE `events` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `event_date` DATE NOT NULL,
    `description` TEXT,
    `venue` VARCHAR(255)
);

-- Table for Members
CREATE TABLE `members` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255),
    `bio` TEXT,
    `photo_url` VARCHAR(255)
);

-- Sample Data for Users
INSERT INTO `user` (`username`, `email`, `password`) VALUES
('dhruv', 'dhruv@example.com', '$2a$10$T/dK4.PzL.bF5n/S9X.o8uQ.K.t.G7x.R8z.t.Z8x.S9d.Q9k.C7x'), -- password: password123
('prit', 'prit@example.com', '$2a$10$T/dK4.PzL.bF5n/S9X.o8uQ.K.t.G7x.R8z.t.Z8x.S9d.Q9k.C7x'); -- password: password123

-- Sample Data for Events
INSERT INTO `events` (`title`, `event_date`, `description`, `venue`) VALUES
('Introduction to Spring Boot', '2024-01-15', 'A workshop on getting started with Spring Boot framework.', 'Virtual (Zoom)'),
('Web Development Hackathon', '2024-02-20', '24-hour hackathon to build innovative web applications.', 'University Auditorium'),
('Data Structures and Algorithms Session', '2024-03-10', 'Peer learning session on fundamental DSA concepts.', 'Room 301');

-- Sample Data for Members
INSERT INTO `members` (`name`, `role`, `bio`, `photo_url`) VALUES
('Jay Prajapati', 'Secretary', 'Passionate about full-stack development and leading the club.', 'Jay Prajapati.png'),
('Krupal Patel', 'President', 'Specializes in backend systems and database management.', 'Krupal Patel.png'),
('Mihir Bhavsar', 'Graphic Designer', 'Enthusiastic about organizing engaging coding events.', 'Mihir Bhavsar.png'),
('Shivam Parmar', 'Committe Member', '..', 'Shivam Parmar.png'),
('Yash Solanki', 'Committe Member', '..', 'Yash Solanki.png');


