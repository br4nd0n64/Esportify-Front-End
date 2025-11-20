-- Intégration de quelques données à des fins de test
INSERT INTO Users VALUES ("1", "player", "player@outlook.com", "player64?!@", "Player", "99", "2025-02-31 8:00:00", "2025-03-01 9:00:00");
INSERT INTO Users VALUES ("2", "organizer", "organizer@outlook.com", "organizer64?!@", "Organizer", "999", "2025-03-02 10:00:00", "2025-03-03 11:00:00");
INSERT INTO Users VALUES ("3", "administrator", "administrator@outlook.com", "administrator64?!@", "Administrator", "9999", "2025-03-04 12:00:00", "2025-03-05 13:00:00");

INSERT INTO ESportEvents VALUES ("1", "2", "Super Smash Bros. Ultimate", "Plusieurs parties en 1VS1 sont prévus", "0", "2025-04-01 10:30:00", "2025-04-01 12:30:00", "2025-03-25 8:00:00", "2025-03-25 16:00:00", "TRUE");

INSERT INTO ESportEventsImages VALUES ("1", "1", "https://example.com/SSBU_Event_Image.png", "2025-03-25 8:00:00");

INSERT INTO FavoriteESportEvents VALUES ("1", "1", "1", "2025-03-27 8:00:00");