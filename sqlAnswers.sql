-- Who checked out 'The Hobbit'
SELECT name FROM member JOIN checkout_item ON member.id = checkout_item.member_id WHERE book_id =(SELECT id FROM book WHERE book.title = 'The Hobbit');  
Answer: Anand Beck
-- How many people have not checked out anything? --
SELECT COUNT(member.id) FROM member LEFT JOIN checkout_item ON member.id = checkout_item.member_id WHERE checkout_item.member_id IS NULL;
Answer: 37
-- What books and movies aren't checked out? --
SELECT id,title FROM movie LEFT JOIN checkout_item ON movie.id = checkout_item.movie_id WHERE checkout_item.movie_id IS NULL;
Answer:
6|Thin Red Line
7|Crouching Tiger, Hidden Dragon
8|Lawrence of Arabia
9|Office Space
SELECT id,title FROM book LEFT JOIN checkout_item ON book.id = checkout_item.book_id WHERE checkout_item.book_id IS NULL;
Answer:
2|Fellowship of the Ring
6|1984
7|Tom Sawyer
8|Catcher in the Rye
9|To Kill a Mockingbird
10|Domain Driven Design

-- Add the book 'The Pragmatic Programmer', and add yourself as a member. Check out 'The Pragmatic Programmer'. Use your query from question 1 to verify that you have checked it out. Also, provide the SQL used to update the database. --
BEGIN TRANSACTION;
INSERT INTO book(title) values('The Pragmatic Programmer'); 
INSERT INTO member(name) values('Philipp Ludewig');
INSERT INTO checkout_item(member_id,book_id) values((SELECT id FROM member WHERE name ='Philipp Ludewig'),(SELECT id from book WHERE title='The Pragmatic Programmer'));
SELECT name FROM member JOIN checkout_item ON member.id = checkout_item.member_id WHERE book_id =(SELECT id FROM book WHERE book.title = 'The Pragmatic Programmer');
COMMIT;
ANSWER: Philipp Ludewig

-- Who has checked out more that 1 item? --
SELECT count(member_id) AS occurance from checkout_item GROUP By member_id HAVING occurance > 1;
Answer: 1 

