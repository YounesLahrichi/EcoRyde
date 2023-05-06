const express = require('express');
//import express from 'express';

//const db = require('./config');
const app = express();

app.use(express.json());
app.use(require("./routes/User.js"));

/*
app.get("/user", async(req, res) => {
    const snapshot = await User.get();
    res.send(snapshot);
})*/

app.listen(4000, () => console.log('We on that!!! at 4k :D'));