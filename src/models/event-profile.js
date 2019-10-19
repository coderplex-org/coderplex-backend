import { id } from './utils'

const EventProfile = (sequelize, DataTypes) => {
  const EventProfile = sequelize.define(
    'event_profile',
    {
      id: id(DataTypes)
    }
  )

  EventProfile.associate = models => {
    EventProfile.belongsTo(models.User, { onDelete: 'CASCADE' })
  }

  return EventProfile
}

export default EventProfile
