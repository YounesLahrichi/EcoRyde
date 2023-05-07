const firebase = require("firebase");
const express = require("express");
const db = require('../config');

const hostRoutes = express.Router();
const Hosts = db.collection("Hosts");

hostRoutes.route("/hosts").get(async function (req, response) {
    try {
        const snapshot = await Hosts.get();
        //return snapshot.docs.map(doc => doc.data())
        response.json(snapshot.docs.map(doc => doc.data()));
    } catch (e) {
        console.log("An error occurred pulling all Hosts. " + e);
    }
});

hostRoutes.route("/host/:id").get(async function (req, response) {
    var docRef = Hosts.doc(req.params.id);
    try {
        //var docRef = await User.doc(req.params.id);
        //var docRef = User.doc(req.params.id);
        //const docSnap = await User.getDoc(docRef);
        const doc = await docRef.get();
        if(doc.exists){
            response.json(doc.data());
        } else {
            console.log("Host not found")
        }
        //response.json(docRef.get().data());
    } catch (e) {
        console.log("An error occured pulling a Host" + e);
    }
});

hostRoutes.route("/host/add").post(async function (req, response) {
    try {
        let data = req.body;
        const doc = Hosts.doc(req.body.hid);
        await doc.set({data});
        response.send("Host Added");
    } catch(e) {
        console.log("An error occurred adding a Host. " + e);
    }
});

module.exports  = hostRoutes