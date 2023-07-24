const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");
const { addUser } = require("../mysql/queries");

router.post("/", async (req, res) => {

    const { email, password } = req.body;

    //store the user in the database
    const result = await asyncMySQL(addUser(email, password));
    console.log(result);
})

module.exports = router;