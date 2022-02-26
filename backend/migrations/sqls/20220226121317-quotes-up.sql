CREATE TABLE quotes (
    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    author VARCHAR
);

INSERT INTO quotes (text, author)
VALUES (
        'People who are really serious about software should make their own hardware.',
        'Alan Kay'
    );

INSERT INTO quotes (text, author)
VALUES (
        'The best way to predict the future is to invent it.',
        'Alan Kay'
    );

INSERT INTO quotes (text, author)
VALUES (
        'It''s hardware that makes a machine fast. It''s software that makes a fast machine slow.',
        'Craig Bruce'
    );

INSERT INTO quotes (text, author)
VALUES (
        'In short, software is eating the world.',
        'Marc Andreessen'
    );