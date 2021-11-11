DROP TABLE IF EXISTS MESSAGES;

CREATE TABLE MESSAGES (
    ID SERIAL PRIMARY KEY NOT NULL, 
    TITLE TEXT NOT NULL,
    BODY TEXT NOT NULL);


INSERT INTO MESSAGES (TITLE, BODY) VALUES ('Why can''t cats play poker in the jungles?', 'Too many cheetahs');
INSERT INTO MESSAGES (TITLE, BODY) VALUES ('I love pressing the F5 key', 'It''s refreshing');
INSERT INTO MESSAGES (TITLE, BODY) VALUES ('Fed Ex and UPS are merging', 'The new company name is Fed UP');
INSERT INTO MESSAGES (TITLE, BODY) VALUES ('How do you get to Carnegie Hall?', 'Sir, this is a Wendy''s!');