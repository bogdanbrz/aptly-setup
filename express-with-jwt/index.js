const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
const jwt = require("jsonwebtoken");
require("dotenv").config();

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/createtoken", (req, res) => {
    let username = "default username";
    if (req.body && req.body.username) username = req.body.username;
    res.json(
        jwt.sign({ username: username }, process.env.TOKEN_SECRET, {
            expiresIn: "3600s",
        })
    );
});

const checkToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.send("invalid token");
    const token = authHeader.split(" ")[1]; // header format: "Authorization: Bearer JWT_ACCESS_TOKEN"
    if (token == null) return res.send("invalid token");

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err) {
            console.log("Error " + err);
            return res.send("invalid token");
        }
        req.user = user;
        next();
    });
};

app.get("/restricted", checkToken, (req, res) => {
    res.send("you are logged in");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
