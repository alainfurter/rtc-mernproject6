# rtc-mernproject6
RTC MERN Project 6 - Basic API Rest with Express and MongoDB

Basic API to manage a collection of publishers and their books.


Mongo DB URL:
-----------------------------------------

mongodb://localhost:27017/books

(see src/config/db.js)



Publisher Collection:
-----------------------------------------

Publisher Schema

const publisherSchema = new mongoose.Schema({
  name: String,
  book_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});


API Endpoints:

1. Get all publishers in the MongoDB collection:
GET http://localhost:4001/publishers


2. Get a particular publisher by its id:
GET http://localhost:4001/publishers/:id


3. Create a new publisher
POST http://localhost:4001/publishers

Submit the following payload in the body of the POST request as an example:
{
      "name": "Publisher Name",
      "book_ids": [
        "book object id"
      ]
}

4. Update a particular publisher identified by its id:
PUT http://localhost:4001/publishers/:id

Submit updated keys and values for a particular car identifed by its id. Possible keys:
{
      "name": "New Name"
}


5. Delete a particular publisher identified by its id:
DELETE http://localhost:4001/publishers/:id


Book Collection:
-----------------------------------------

Book Schema

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  language: String,
  year: String,
  publisher_id: { type: mongoose.Schema.Types.ObjectId, ref: "Publisher" },
});


API Endpoints:

1. Get all books in the MongoDB collection:
GET http://localhost:4001/books


2. Get a particular book by its id:
GET http://localhost:4001/book/:id


3. Create a new book
POST http://localhost:4001/books

Submit the following payload in the body of the POST request as an example:
{
      "title": "Title of book",
      "author": "Author of book",
      "language": "Language of book",
      "year": "Year published",
      "publisher_id": "Publisher object id"
}

4. Update a particular book identified by its id:
PUT http://localhost:4001/books/:id

Submit updated keys and values for a particular car identifed by its id. Possible keys:
{
      "language": "New language",
      "year": "New production year"
}

5. Delete a particular book identified by its id:
DELETE http://localhost:4001/books/:id


Relationship between publisher and books:
-----------------------------------------

API Endpoints:

1. Get a particular book identified by its id with the publisher details 
GET http://localhost:4001/books/withpublisher/:id
id: book id

2. Get a particular publisher identified by its id with the book details 
GET http://localhost:4001/publishers/withbooks/:id
id: publisher id


3. Add a particular publisher id to a book identified by its id
PUT http://localhost:4001/books/addpublisher/:id

id: book id
payload in body:
{
    "publisher_id": "id of publisher to add or replace"
}

4. Add a particular book id to a publisher's book_ids array identified by its id
PUTttp://localhost:4001/publishers/addbook/:id

id: publisher id
payload in body:
{
      "book_id": "id of book to add to the array book_ids"
}
