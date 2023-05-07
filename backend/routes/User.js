//import {doc, getDoc} from `firebase`;
//import express from `express`;
//import db from `../config`;

//const doc = require("firebase");
//const getDoc = require("firebase");
const firebase = require("firebase");
const express = require("express");
const db = require('../config');

const userRoutes = express.Router();
const User = db.collection("User");

userRoutes.route("/users").get(async function (req, response) {
    try {
        const snapshot = await User.get();
        //return snapshot.docs.map(doc => doc.data())
        response.json(snapshot.docs.map(doc => doc.data()));
    } catch (e) {
        console.log("An error occurred pulling all Users. " + e);
    }
});

/*
userRoutes.route("/user/:id").get(async function (req, response) {
    try {
        //var docRef = await User.doc(req.params.id);
        var docRef = User.doc(req.params.id);
        const docSnap = await User.getDoc(docRef);
        if(docSnap.exists){
            response.json(docSnap.data());
        } else {
            console.log("No such document");
        }
        //response.json(docRef.get().data());
    } catch (e) {
        console.log("" + e);
    }
});

*/

userRoutes.route("/user/:id").get(async function (req, response) {
    var docRef = User.doc(req.params.id);
    try {
        //var docRef = await User.doc(req.params.id);
        //var docRef = User.doc(req.params.id);
        //const docSnap = await User.getDoc(docRef);
        const doc = await docRef.get();
        if(doc.exists){
            response.json(doc.data());
        } else {
            response.send("user not found")
        }
        //response.json(docRef.get().data());
    } catch (e) {
        console.log("An error occured pulling a User" + e);
    }
});

//add check if user is already added
userRoutes.route("/user/add").post(async function (req, response) {
    try {
        //let data = req.body;
        const doc = User.doc(req.body.uid);
        await doc.set(req.body);
        response.send("User Added");
    } catch(e) {
        console.log("An error occurred adding a User. " + e);
    }
});

//
//userRoutes.route("/user/update").
userRoutes.route("/user/update").put(async function (req, response) {
    //var docRef = User.doc(req.params.id);
    try {
        //const doc = await docRef.get();
        //console.log(req.body.id)
        let data = req.body;
        const doc = User.doc(req.body.uid);
        //const doc = await docRef.get();
        //console.log()
        //console.log();
        //console.log()
        await doc.update(data);
        //response.json("User Updated");
        //await User.patch({data}); //cannot use email
        response.send("User Updated");
    } catch(e) {
        console.log("An error occurred updating a User. " + e);
    }
});



module.exports  = userRoutes