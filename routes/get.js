const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

router.get("/breeds", async (req, res) => {
    console.log("router ran - GET");
    const results = await asyncMySQL(`
        SELECT breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds, image
            FROM dogsBreeds;`);
    res.send({ status: 1, results });
});

router.get("/breeds/:id", async (req, res) => {
    const id = Number(req.params.id);

    //check the id is a number
    if (isNaN(id)) {
        res.send({ status: 0, reason: "invalid id" });
        return;
    }

    //ask SQL for data
    const results = await asyncMySQL(`
        SELECT breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds, image
            FROM dogsBreeds 
            WHERE id LIKE ${id};`);


    if (!results.length > 0) {
        res.send({ status: 1, breed });

    }
    res.send({ status: 0, reason: "id not found" });

})

module.exports = router;