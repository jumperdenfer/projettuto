const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongojs = require("mongojs");

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get("/users", (req, res, next) => {
    db = mongojs("cocovoit",["users"])
    db.users.find((err, users) => {
        if (err) return next(err);
        response.data = users;
        res.json(response);
    });
});

// Get user
router.get("/user/:login/:password", (req, res, next) => {
//console.log('', req.params);
    db = mongojs("cocovoit",["users"])
    db.users.find({"login":req.params.login,"password":req.params.password},{_id:false},(err, user) => {
        if (err) return next(err);
        response.data = user;
        res.json(response);
    });
});

//Save user
router.post("/adduser", (req, res, next) => {
    db = mongojs("cocovoit",["users"])
    db.users.save(req.body);
});

//Delete user
router.delete("/deleteUser/:login", (req, res, next) => {
    db = mongojs("cocovoit",["users"])
    db.users.remove({"login":req.params.login});
});

// Get villes
router.get("/villes", (req, res, next) => {
    db = mongojs("cocovoit",["villes"])
    db.villes.find((err, villes) => {
        if (err) return next(err);
        response.data = villes;
        res.json(response);
    });
});

// Get trajets
router.get("/trajets", (req, res, next) => {
    db = mongojs("cocovoit",["trajets"])
    db.trajets.find((err, trajets) => {
        if (err) return next(err);
        response.data = trajets;
        res.json(response);
    });
});

//Save trajet
router.post("/addtrajet", (req, res, next) => {
    db = mongojs("cocovoit",["trajets"])
    db.trajets.save(req.body);
});

// Get propositions
router.get("/propositions", (req, res, next) => {
    db = mongojs("cocovoit",["propositions"])
    db.propositions.find((err, propositions) => {
        if (err) return next(err);
        response.data = propositions;
        res.json(response);
    });
});

// Show propositions
router.get("/propositions/:depart/:arrive", (req, res, next) => {
    db = mongojs("cocovoit",["propositions"])
    db.propositions.find(
        {"depart":req.params.depart,"arrivee":req.params.arrive},
        (err, propositions) => {
        if (err) return next(err);
        response.data = propositions;
        res.json(response);
    });
});

//Save proposition
router.post("/addproposition", (req, res, next) => {
    db = mongojs("cocovoit",["propositions"])
    db.propositions.save(req.body);
});


//Show trajets
router.get("/trajets/:depart/:arrive", (req, res, next) => {
    db = mongojs("cocovoit",["trajets"])
    db.trajets.find(
        {"depart":req.params.depart,"arrivee":req.params.arrive},
        (err, trajets) => {
        if (err) return next(err);
        response.data = trajets;
        res.json(response);
    });
});

module.exports = router;