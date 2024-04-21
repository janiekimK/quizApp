
CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    question TEXT,
    answer TEXT
);


CREATE TABLE choices (
    id INTEGER PRIMARY KEY,
    question_id INTEGER,
    choice TEXT,
    FOREIGN KEY (question_id) REFERENCES questions(id)
);


INSERT INTO questions (question, answer) VALUES
    ('Was ist die Hauptstadt von Japan?', 'Tokio'),
    ('Welche dieser Städte ist die Hauptstadt von Kanada?', 'Ottawa'),
    ('Welches dieser Länder hat Stockholm als Hauptstadt?', 'Schweden'),
    ('Was bedeutet ''CPU'' in der Informatik?', 'Central Processing Unit'),
    ('Welche der folgenden Optionen ist ein Speichertyp in einem Computer?', 'RAM'),
    ('Was ist ein ''Pixel''?', 'Ein Bildschirmelement'),
    ('Welcher Film gewann den Oscar für den besten Film im Jahr 1994?', 'Forrest Gump'),
    ('Wer spielte die Hauptrolle in ''Der Pate''?', 'Marlon Brando'),
    ('Welcher dieser Filme wurde von Steven Spielberg inszeniert?', 'Jurassic Park'),
    ('Wer spielte die Hauptrolle in ''Der Herr der Ringe''?', 'Elijah Wood');

INSERT INTO choices (question_id, choice) VALUES
    (1, 'Tokio'),
    (1, 'Seoul'),
    (1, 'Peking'),
    (1, 'Bangkok'),
    (2, 'Toronto'),
    (2, 'Montreal'),
    (2, 'Ottawa'),
    (2, 'Vancouver'),
    (3, 'Norwegen'),
    (3, 'Finnland'),
    (3, 'Schweden'),
    (3, 'Dänemark'),
    (4, 'Central Processing Unit'),
    (4, 'Computer Program Unit'),
    (4, 'Central Power Unit'),
    (4, 'Core Processing Unit'),
    (5, 'RAM'),
    (5, 'CPU'),
    (5, 'GPU'),
    (5, 'PSU'),
    (6, 'Ein Bildschirmelement'),
    (6, 'Ein Speichertyp'),
    (6, 'Eine Mausmarke'),
    (6, 'Eine Maßeinheit für Entfernung'),
    (7, 'Forrest Gump'),
    (7, 'Pulp Fiction'),
    (7, 'Schindler''s Liste'),
    (7, 'Der König der Löwen'),
    (8, 'Al Pacino'),
    (8, 'Robert De Niro'),
    (8, 'Marlon Brando'),
    (8, 'Jack Nicholson'),
    (9, 'Der Herr der Ringe: Die Gefährten'),
    (9, 'Jurassic Park'),
    (9, 'Avatar'),
    (9, 'Inception'),
    (10, 'Daniel Radcliffe'),
    (10, 'Elijah Wood'),
    (10, 'Orlando Bloom'),
    (10, 'Leonardo DiCaprio');
