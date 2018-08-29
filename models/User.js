const mongoose = require('mongoose')
const { Schema } = mongoose

const {
  linkType
} = require('./validators')

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'username is required!'],
    unique: true,
    validate: {
      validator: async (v) => {
        return /^[\w\d]+$/ig.test(v)
      },
      message: props => `${props.value} is not a valid username!`
    }
  },
  email: {
    type: String,
    validate: {
      validator: async (v) => {
        return /^[\d\w]+@[\d\w]+\.[\w]+$/ig.test(v)
      },
      message: props => `${props.value} is not a valid email address!`
    },
    required: [true, 'email is required!']
  },
  password: {
    type: String,
    required: [true, 'password is required!'],
    minlength: 10
  },
  mobile: {
    type: Number,
    default: 0
  },
  bio: {
    type: String,
    maxlength: 1000,
    default: ''
  },
  working: Boolean,
  forhire: Boolean,
  links: {
    facebook: linkType,
    twitter: linkType,
    linkedin: linkType,
    angellist: linkType,
    stackoverflow: linkType,
    codepen: linkType,
    github: linkType,
    behance: linkType,
    discord: String
  },
  techFamiliarWith: [String],
  techInterestedIn: [String],
  projects: [Schema.Types.ObjectId],
  hits: {
    type: Number,
    default: 0
  }
})

const User = mongoose.model('User', UserSchema)

module.exports = User
