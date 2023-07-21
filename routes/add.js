const express = require("express");
const { genRandomString } = require("../utils/math");
const router = express.Router();
import { genRandomString } from "../utils/math";

router.post("/new-breed", (req, res) => {
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
        !groomingNeeds,

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

    //check for duplicates
    const indexOf = req.dogs.findIndex((item) => {
        return item.breed === breed;
    });

    if (indexOf > -1) {
        res.send({ status: 0, reason: "duplicate entry" });
        return;
    }

    req.dogs.push({
        id: genRandomString(16), //id: Math.round(Math.random() * 1000000),
        breed,
        size,
        lifespan,
        colours,
        dogGroup,
        exerciseDemands,
        groomingNeeds
    });

    res.send({ status: 1 })

});

module.exports = router;