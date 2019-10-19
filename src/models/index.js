import Sequelize from 'sequelize'
import { development } from '../config/config'
//import all models here
import user from './user'
import socialProfile from './social-profile'
import eventProfile from './event-profile'

let sequelize
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
  })
} else {
  sequelize = new Sequelize(
    development.database,
    development.username,
    development.password,
    {
      dialect: 'postgres',
    },
  )
}

const models = {
  User: user(sequelize, Sequelize.DataTypes),
  SocialProfile: socialProfile(sequelize, Sequelize.DataTypes),
  EventProfile: eventProfile(sequelize, Sequelize.DataTypes)
}

console.log(models)

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

export { sequelize }

export default models
