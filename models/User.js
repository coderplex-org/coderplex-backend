const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 10
  },
  mobile: Number,
  bio: {
    type: String,
    maxlength: 1000
  },
  working: Boolean,
  forhire: Boolean,
  links: {
    facebook: String,
    twitter: String,
    linkedin: String,
    angellist: String,
    stackoverflow: String,
    codepen: String,
    github: String,
    behance: String,
    discord: String
  },
  techFamiliarWith: [String],
  techInterestedIn: [String],
  projects: [Schema.Types.ObjectId],
  hits: Number
})

const User = mongoose.model('User', UserSchema)

module.exports = User
