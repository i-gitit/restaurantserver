const express = require('express');
const bodyParser = require('body-parser');
const Feedbacks = require('../models/feedbacks');
const feedbackRouter = express.Router();
const cors = require('./cors');
feedbackRouter.use(bodyParser.json());

feedbackRouter.route('/')
.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
.get(cors.cors, (req,res,next)=>{
    Feedbacks.find({})
    .then((feedbacks)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(feedbacks);
    },(err)=>next(err))
    .catch((err)=>next(err));
})

.post(cors.cors,(req,res, next)=>{
    Feedbacks.create(req.body)
    .then((feedback)=>{
        res.statusCode=200;
        res.setHeader('Content-Type', 'application/json');
        res.json(feedback);
    },(err)=>next(err))
    .catch((err)=>next(err));
});

module.exports = feedbackRouter;
