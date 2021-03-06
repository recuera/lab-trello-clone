'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  position:{
    type:Number,
    require:true
  },
  cards:{
    type:Array,
    require: true,
    default:[]
  }
}, 

{
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }

);

module.exports = mongoose.model('List', listSchema);

