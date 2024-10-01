const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000
const bodyParser = require('body-parser');
const https = require('https');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.get('/server/:name',   (req,res) => {
    name = req.params.name
    axios({
        method: "get",
        url: `https://raw.githubusercontent.com/zuydd/database/main/${name}`,
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }).then(response => {

        res.send(response.data);
    }).catch(err => {
        res.send(err);
    });
})

//port
app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`);
})