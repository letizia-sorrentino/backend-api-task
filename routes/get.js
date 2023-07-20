const express = require("express");
const router = express.Router();

router.get("/breeds", (req, res) => {
    console.log("router ran");
    res.send({ status: 1, breeds: req.dogs });
});

router.get("/breeds/:id", (req, res) => {

    const id = Number(req.params.id);

    //check the id is a number
    if (isNaN(id)) {
        res.send({ status: 0, reason: "invalid id" });
        return;
    }

    //copy and find the specific breed
    const _dogs = [...req.dogs];
    const breed = _dogs.find((item) => {
        return item.id === id;
    })

    //check that breed exists
    if (!breed) {
        res.send({ status: 0, reason: "id not found" });
    }

    res.send({ status: 1, breed });
})

module.exports = router;