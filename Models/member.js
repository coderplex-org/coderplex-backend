const mongoose, { Types: {
  ObjectId
} } = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  userID: ObjectId,
  projectName: String,
  projectDesc: String,
  techUsed: [String],
  projectLinks: {
    live: String,
    source: String,
  },
});

const MemberSchema = new mongoose.Schema({
  userName: String,
  profilePic: String,
  bio: String,
  isLookingForWork: Boolean,
  socialMediaHandles: {
    facebook: String,
    discord: String,
    github: String,
    linkedin: String,
    twitter: String,
  },
  skills: [String],
  interestedIn: [String],
  projects: [String],
})

module.exports = {
  Member: mongoose.model('Member', MemberSchema),
  Project: mongoose.model('Project', ProjectSchema),
}
