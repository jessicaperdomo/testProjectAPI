const express = require("express");
const axios = require("axios");

const app = express();

app.get("/describe/:pack", async (req, res) => {
    const package = req.params.pack;
    
    const promise = axios.get(`https://registry.npmjs.com/${package}`);
    const response = await promise;

    res.json({
        information: response.data.description, 
    });

});

app.listen(8080);