# rtc-mernproject5
RTC MERN Project 6 - Basic API Rest with Express and MongoDB

Basic API to manage a collection of cars.


Mongo DB URL:
-----------------------------------------

mongodb://localhost:27017/cars

(see src/config/db.js)


Car Schema (MongoDB):
-----------------------------------------

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  color: String,
  year: String
});


API Endpoints:
-----------------------------------------

1. Get all cars in the MongoDB collection:
-----------------------------------------

GET http://localhost:4001/cars


2. Get a particular car by its id:
-----------------------------------------

GET http://localhost:4001/car/:id


3. Create a new car
-----------------------------------------

POST http://localhost:4001/cars

Submit the following payload in the body of the POST request as an example:

{
    "brand" : "Band Name",
    "model" : "Model Name",
    "color" : "Color of the car",
    "year"  : "Year or production"
}

4. Update a particular car identified by its id:
-----------------------------------------

PUT http://localhost:4001/car/:id

Submit updated keys and values for a particular car identifed by its id. Possible keys:

{
    "brand" : "Band Name",
    "model" : "Model Name",
    "color" : "Color of the car",
    "year"  : "Year or production"
}


5. Delete a particular car identified by its id:
-----------------------------------------

DELETE http://localhost:4001/car/:id
