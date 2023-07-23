const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");


router.patch("/breed/:id", async (req, res) => {
    console.log("router ran - UPDATE");

    const id = Number(req.params.id);

    const { breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds } = req.body;

    try {
        //for security we have repetition
        if (breed && typeof breed === "string") {
            await asyncMySQL(`UPDATE breed SET breed ="${breed}" WHERE id LIKE "${id}"`);

        }

        if (size && typeof size === "string") {
            await asyncMySQL(`UPDATE size SET size ="${size}" WHERE id LIKE "${id}"`);

        }


        if (lifespan && typeof lifespan === "string") {
            await asyncMySQL(`UPDATE lifespan SET lifespan ="${lifespan}" WHERE id LIKE "${id}"`);

        }

        if (colours && typeof colours === "string") {
            await asyncMySQL(`UPDATE colours SET colours ="${colours}" WHERE id LIKE "${id}"`);

        }

        if (dogGroup && typeof dogGroup === "string") {
            await asyncMySQL(`UPDATE dogGroup SET dogGroup ="${dogGroup}" WHERE id LIKE "${id}"`);

        }

        if (exerciseDemands && typeof exerciseDemands === "string") {
            await asyncMySQL(`UPDATE exerciseDemands SET exerciseDemands ="${exerciseDemands}" WHERE id LIKE "${id}"`);

        }

        if (groomingNeeds && typeof groomingNeeds === "string") {
            await asyncMySQL(`UPDATE groomingNeeds SET groomingNeeds ="${groomingNeeds}" WHERE id LIKE "${id}"`);

        }

    } catch (error) {
        res.send({ status: 0, reason: error.sqlMessage });

    }



    res.send({ status: 1 });

});

module.exports = router;