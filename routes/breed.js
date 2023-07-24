const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

//get data
router.get("/:id", async (req, res) => {
    const id = Number(req.params.id);

    //check the id is a number
    if (isNaN(id)) {
        res.send({ status: 0, reason: "invalid id" });
        return;
    }

    //ask SQL for data
    const results = await asyncMySQL(`
        SELECT id, breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds, image
            FROM dogsBreeds 
            WHERE id LIKE ${id};`);


    if (!results.length > 0) {
        res.send({ status: 1, breed });

    }
    res.send({ status: 0, reason: "id not found" });

});

//delete a breed
router.delete("/:id", async (req, res) => {
    console.log("router ran - DELETE");
    const id = Number(req.params.id);

    //check that id is a number
    if (Number.isNaN(id)) {
        res.send({ status: 0, reason: "Invalid id" });
        return;
    }
    //ask SQL for data
    const result = await asyncMySQL(`
            DELETE FROM dogsBreeds
                WHERE id LIKE ${id};`);

    res.send({ status: 1 });
});

//adding a new breed
router.post("/", async (req, res) => {
    console.log("router ran - ADD");
    const { breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds, userId} = req.body;

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
    (breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds, user_id)
    VALUES
    ("${breed}", 
    "${size}", 
    "${lifespan}",
    "${colours}",
    "${dogGroup}",
    "${exerciseDemands}",
    "${groomingNeeds}"
    "${userId}")`)
        res.send({ status: 1 });

    } catch (error) {
        console.log(error);
        res.send({ status: 0, reason: "duplicate entry" });
    }


});

//update a breed
router.patch("/:id", async (req, res) => {
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