const express = require("express");
const router = express.Router();

router.patch("/breed/:id", (req, res) => {
    console.log("router ran - UPDATE");
    const allowableSizes = ["Small", "Small to Medium", "Medium", "Large", "Various"];

    const id = Number(req.params.id);

    // check that id is a number
    if (Number.isNaN(id)) {
        res.send({ status: 0, reason: "Invalid id" });
        return;
    }

    const indexOf = req.dogs.findIndex((item) => {
        return item.id === id;
    });

    //check that breed exists
    if (indexOf === -1) {
        res.send({ status: 0, reason: "Id not found" });
        return;
    }

    const { breed, size, lifespan, colours, dogGroup, exerciseDemands, groomingNeeds } = req.body;


    //for security we have repetition
    if (breed && typeof breed === "string") {
        req.dogs[indexOf].breed = breed;
    }

    if (lifespan && typeof lifespan === "string") {
        req.dogs[indexOf].lifespan = lifespan;
    }

    if (colours && typeof colours === "string") {
        req.dogs[indexOf].colours = colours;
    }

    if (dogGroup && typeof dogGroup === "string") {
        req.dogs[indexOf].dogGroup = dogGroup;
    }

    if (exerciseDemands && typeof exerciseDemands === "string") {
        req.dogs[indexOf].exerciseDemands = exerciseDemands;
    }

    if (groomingNeeds && typeof groomingNeeds === "string") {
        req.dogs[indexOf].groomingNeeds = groomingNeeds;
    }


    if (allowableSizes.includes(size)) {
        req.dogs[indexOf].size = size;
    }
    res.send({ status: 1 });

});

module.exports = router;