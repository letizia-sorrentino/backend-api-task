const express = require("express");
const router = express.Router();
const asyncMySQL = require("../mysql/connection");

router.delete("/breeds/:id", async (req, res) => {
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

module.exports = router;