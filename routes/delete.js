const express = require("express");
const router = express.Router();

router.delete("/breeds/:id", (req, res) => {
    console.log("router ran - DELETE");
    const id = Number(req.params.id);

    //check that id is a number
    if (Number.isNaN(id)) {
        res.send({ status: 0, reason: "Invalid id" });
        return;
    }

    const indexOf = req.dogs.findIndex((item) => {
        return item.id === id;
    });

    if (indexOf < 0) {
        res.send({ status: 0, reason: "Id not found" });

    }

    req.dogs.splice(indexOf, 1);

    res.send({ status: 1 });



});

module.exports = router;