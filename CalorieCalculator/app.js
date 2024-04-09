const express = require('express')
const app = express();
const commonRouters = require('./api/routes/commons.js');
const brandRouters = require("./api/routes/brand.js")
const specificRouters = require('./api/routes/specific.js');
const bodyParser = require('body-parser');
app.use(bodyParser.json())


app.use((req, res, next) =>{ //every request funnels through this middleware
    console.log(`
        - Incoming Method: [${req.method}] 
        - Url: [${req.url}] 
        - IP: [${req.socket.remoteAddress}]`);
        res.on('finish', () =>{
            console.log(`
            - Incoming Method: [${req.method}] 
            - Url: [${req.url}] 
            - IP: [${req.socket.remoteAddress}]
            - Status: [${res.statusCode}]
            ]`);
        })
        next();
});

app.use("/common", commonRouters); //anything starting with /common will be sent to the commonRouters folder
app.use("/brand", brandRouters);
app.use("/specific", specificRouters);

app.use("/", (req, res)=> {
    res.status(200).json({
        "message": "Server is alive and well"
    });
});


module.exports = app;