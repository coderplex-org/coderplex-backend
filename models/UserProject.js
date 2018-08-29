const mongoose = require('mongoose')
const { Schema } = mongoose

const { linkType } = require('./validators')

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
  thumbnailUrl: {
    ...linkType,
    default: 'Some url to default thumbnail'
  },
  creators: {
    type: [Schema.Types.ObjectId],
    required: true
  },
  link: {
    ...linkType,
    required: true
  },
  hits: {
    type: Number,
    default: 0
  }
})

module.exports = UserProjectSchema
