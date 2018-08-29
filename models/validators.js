function linkValidator (value) {
  return /https?:\/\/(w{3}\.)?[\w\d]+\..+/.test(value)
}

const linkType = {
  type: String,
  validate: {
    validator: linkValidator,
    message: 'please provide a valid link'
  }
}

module.exports = {
  linkValidator,
  linkType
}
