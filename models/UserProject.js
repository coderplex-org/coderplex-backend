const mongoose = require('mongoose')
const { Schema } = mongoose

const UserProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  desc: {
    type: String,
    required: true,
    minlength: 100,
    maxlength: 1000
  },
  thumbnailUrl: String,
  creators: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  link: {
    type: String,
    required: true
  },
  hits: Number
})

module.exports = UserProjectSchema
