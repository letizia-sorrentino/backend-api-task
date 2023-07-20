//boilerplate to bring express in
const express = require("express");
const app = express(); //create an instance of express
const dogs = require("./dogs.json");

//adds an id to each dog
dogs.forEach((item, index) => {
    item.id = index + 1;
})

//middelware function
app.use((req, res, next) => {
    console.log("new request");
    next();
});

//make data available in all program
app.use((req, res, next) => {
    req.dogs = dogs;
    next();
});

//convert the body to json
app.use(express.json());

//routes
app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"));

//boilerplate to start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
    console.log(`the server is running on ${port}`);
});
