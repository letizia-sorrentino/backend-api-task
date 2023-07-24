const express = require("express");
const app = express();

//middelware function
app.use((req, res, next) => {
    console.log("new request");
    next();
});


//convert the body to json
app.use(express.json());

//routes
app.use("/get", require("./routes/get"));
app.use("/delete", require("./routes/delete"));
app.use("/add", require("./routes/add"));
app.use("/update", require("./routes/update"));
app.use("/user", require("./routes/user"));

//boilerplate to start the server
const port = process.env.PORT || 6001;
app.listen(port, () => {
    console.log(`the server is running on ${port}`);
});


