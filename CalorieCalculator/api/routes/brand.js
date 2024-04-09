const express = require('express');
const router = express.Router();
const axios = require('axios');
const { mapToDTO, mapListToDTO } = require("../DTOs/foodItem");

const allURL = "https://trackapi.nutritionix.com/v2/search/instant?query=";
const brandURL = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=";

const headers = {
    headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env.APP_ID,
        'x-app-key': process.env.APP_KEY,
    },
};

// Search entire Nutritionix's DB but return only the branded list
router.get('/:query', async (req, res) => {
    const query = req.params.query;
    try {
        const response = await axios.get(`${allURL}${query}`, headers);
        if (response.status === 200) {
            brandedItems = response.data["branded"];
            returnedList = [];
            brandedItems.forEach(item => {
                returnedItem = mapListToDTO(item)
                returnedList.push(returnedItem)
            });
            console.log(returnedList)
            res.status(200).json(returnedList);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Retrieve one branded item with the correct values according to provided amount
//sending the ID will be handled via the front end :)
router.get('/:nix_item_id/:amount', async (req, res) => {
    const nix_item_id = req.params.nix_item_id;
    const amount = parseFloat(req.params.amount);
    try {
        const response = await axios.get(`${brandURL}${nix_item_id}`, headers);
        if (response.status === 200) {
            const dto = mapToDTO(response.data.foods[0], amount); // Adjust based on actual data structure
            console.log(dto);
            res.status(200).json(dto);
            //console.log(response.data)
            //res.status(200).json(response.data)
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
