const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

router.get("/", async (req, res) => {
    console.log("router ran - GET");
    const results = await asyncMySQL(`
        SELECT id, breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds, image
            FROM dogsBreeds;`);
    res.send({ status: 1, results });
});



module.exports = router;