const express = require("express");
const { genRandomString } = require("../utils/math");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

router.post("/new-breed", async (req, res) => {
    console.log("router ran - ADD");
    const { breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds } = req.body;

    //check content
    if (
        !breed ||
        !size ||
        !lifespan ||
        !colours ||
        !dogGroup ||
        !exerciseDemands ||
        !groomingNeeds ||

        typeof breed !== "string" ||
        typeof size !== "string" ||
        typeof lifespan !== "string" ||
        typeof colours !== "string" ||
        typeof dogGroup !== "string" ||
        typeof exerciseDemands !== "string" ||
        typeof groomingNeeds !== "string"

    ) {
        res.send({ status: 0, reason: "incomplete or invalid request" });
        return;
    }

    //insert new breed
    try {
        await asyncMySQL(`
    INSERT INTO dogsBreeds
    (breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds)
    VALUES
    ("${breed}", "${size}", "${lifespan}", "${colours}","${dogGroup}","${exerciseDemands}","${groomingNeeds}")
    `)
        res.send({ status: 1 });

    } catch (error) {
        res.send({ status: 0, reason: "duplicate entry" });
    }


});

module.exports = router;