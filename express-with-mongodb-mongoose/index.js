const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
require("dotenv").config();

const mongoose = require("mongoose");
const Item = require("./schema");

const db_uri = process.env.MONGODB_URI;
mongoose
    .connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected to db");
    })
    .catch((err) => {
        console.log("Error: " + err);
    });

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/additem", async (req, res) => {
    const allItems = await Item.find({}); // better to use Schema.countDocuments(), but this is for demonstration
    const item = new Item({ name: "item", index: allItems.length });
    await item.save();
    res.send("added item");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
