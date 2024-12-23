const express = require('express');
const router = express.Router();
const axios = require('axios');
const { mapListToDTO } = require('../DTOs/foodItem');

const allURL = "https://trackapi.nutritionix.com/v2/search/instant?query=";

const headers ={
    headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env.APP_ID,
        'x-app-key': process.env.APP_KEY,
    },
}

//this endpoint will take the common object's name and send it to specific endpoint
router.get("/query/:query", async (req, res) => {
    const query = req.params.query;
    try {
        const response = await axios.get(`${allURL}${query}`, headers);
        if (response.status == 200) {
            commonItems = response.data["common"];
            returnedList = [];
            commonItems.forEach(item => {
                returnedItem = mapListToDTO(item);
                returnedList.push(returnedItem)
            });
            console.log(returnedList);
            res.status(200).json(returnedList);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
});

router.get("/healthCheck", async (req, res) => {
    res.status(200).json({"Im still standing": "better than I ever did"});
});

module.exports = router;