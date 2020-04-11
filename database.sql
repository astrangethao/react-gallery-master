CREATE TABLE gallery
(
    id SERIAL Primary Key,
    title varchar(50) not null,
    description varchar(100) not null,
    path varchar(300) not null,
    likes integer,
    isClicked boolean
);


INSERT INTO "gallery"
    (title, description, path, likes, isclicked)
VALUES
    ('Clever Ruse', 'Some cool artwork.', 'images/clever_ruse.jpg', 0, false),
    ('unicorn', 'Unicorn Digital Painting by James Jean.', 'images/unicorn.jpg', 0, false),
    ('Passage', 'Passage Digital Painting by James Jean.', 'images/passage.jpg', 0, false),
    ('Silver Arrow', 'Cool silver car.', 'images/silver_arrow.jpg', 0, false)
;
