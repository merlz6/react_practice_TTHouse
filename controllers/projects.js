const express = require('express');
const router = express.Router();
const Project = require('../models/projects.js');



router.post('/', (req, res)=>{
    Project.create(req.body, (err, createdProject)=>{
        res.status(201).json({
            status:201,
            message:'Project created'
        })
    });
});


module.exports = router;
