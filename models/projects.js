const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title:{type:String, required: true},
    description:{type:String},
    started:{type:Boolean, default:false},
    image:{type:String},
    percentComplete:{type:Number, default:0},
    technologies:{type:String}

})

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
