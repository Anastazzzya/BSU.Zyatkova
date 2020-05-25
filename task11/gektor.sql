DROP DATABASE up_gektor;
CREATE DATABASE IF NOT EXISTS up_gektor;
USE up_gektor;
CREATE TABLE IF NOT EXISTS USER
(
	USER_ID INT AUTO_INCREMENT PRIMARY KEY,
	NAME varchar(20)
);
CREATE TABLE IF NOT EXISTS POST
(
	POST_ID INT AUTO_INCREMENT PRIMARY KEY,
    USER_ID INT,
    DESCRIPTION TEXT,
    CREATED_AT DATETIME,
    PHOTOLINK VARCHAR(200) DEFAULT NULL,
    LIKES INT DEFAULT NULL,
    FOREIGN KEY(USER_ID) REFERENCES USER(USER_ID)
);
INSERT INTO USER (USER_ID, NAME)
VALUES
(1,'no_name'),
(2,'anastasiya_zyatkova'),
(3,'tutby'),
(4,'literabook'),
(5, '5'),
(6, '6'),
(7,'film_quotes_'),
(8, '8'),
(9, '9'),
(10,'dogs');
INSERT INTO POST (POST_ID, USER_ID, DESCRIPTION, CREATED_AT, PHOTOLINK, LIKES)
VALUES
(1, 1, 'I like eat and sleep!', '2020-03-02T14:11:00', DEFAULT, 2),
(2, 2, 'All or nothing', '2020-03-01T17:51:00', DEFAULT, 3),
(3, 3, 'It\'s wonderful weather for a walk today.', '2020-02-29T11:12:00', DEFAULT, 2),
(4, 4, 'Never apologize. Don\'t say anything. Send flowers. No letters. Just flowers. They cover everything. Even graves.\nE. Remark "Three Comrades"', '2020-02-28T09:45:00', DEFAULT, 3),
(5, 3, 'Today is International Men\'s Day!\n\nBe sure to congratulate your family and friends.', '2020-02-23T15:12:00', '23Feb.jpg', 4),
(6, 2, 'I\'m a second-year student at BSU. Very enlightening!', '2020-02-22T22:22:00', DEFAULT, 3),
(7, 7, 'People who live alone always have something on their minds that they\'d love to tell.\nA.P.Chekhov "About Love"', '2020-02-21T11:11:00', DEFAULT, 3),
(8, 4, 'Behind the beautiful there\'s always some kind of tragedy.\nO.Wilde "Portrait of Dorian Gray."', '2020-02-20T16:33:00', DEFAULT, 4),
(9, 7, 'We get annoyed when we get hurt with something serious.\nW. Shakespeare.', '2020-02-19T13:42:00', DEFAULT, 3),
(10, 10, 'Dogs are best friends of man!', '2020-02-18T18:01:00', 'dogs.jpg', 4);