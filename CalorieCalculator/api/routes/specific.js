const express = require('express');
const router = express.Router();
const axios = require('axios');
const bodyParser = require('body-parser');
const { mapListToDTO, mapToDTO } = require('../DTOs/brand');

const specificSearchURL = "https://trackapi.nutritionix.com/v2/natural/nutrients/";

const headers ={
    headers: {
        "Content-Type": "application/json",
        "x-app-id": process.env.APP_ID,
        'x-app-key': process.env.APP_KEY,
    },
}

router.post("/", async (req, res)=>{
    try{
        const requestBody = req.body;
        const response = await axios.post(specificSearchURL, requestBody, headers)
        if(response.status == 200){
            foodItem = response.data.foods[0]
            finalItem = mapToDTO(foodItem, 1);
            console.log(foodItem)
            //console.log(finalItem);
            //res.status(200).json(finalItem);
        }
        console.log(response.data)
        res.status(200).json(response.data)
    }catch(error){
        console.log(error);
        res.status(500).json({error: "Internal Server Error"})

    }
})

module.exports = router;