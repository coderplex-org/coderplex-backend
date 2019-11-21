import { id } from './utils'

const socialProfile = (sequelize, DataTypes) => {
  const SocialProfile = sequelize.define('social_profile', {
    id: id(DataTypes.UUID),
    facebook: {
      type: DataTypes.STRING,
      allowNull: true
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true
    }
  })

  SocialProfile.associate = models => {
    SocialProfile.belongsTo(models.User, {
      onDelete: 'CASCADE'
    })
  }

  return SocialProfile
}

export default socialProfile
