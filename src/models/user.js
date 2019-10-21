import bcrypt from 'bcrypt'
import { id } from './utils'

const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: id(DataTypes),
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notEmpty: true,
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      contactNo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [6, 14]
        }
      },
      profilePic: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:
          'https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1'
      }
    }
  );

  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { email: login }
    })

    return user
  }

  User.beforeCreate(async user => {
    user.password = await user.generatePasswordHash(user.password)
  })

  User.prototype.generatePasswordHash = async password => {
    const saltRounds = 10
    const hash = await bcrypt.hash(password, saltRounds)
    return hash
  }

  User.prototype.validatePassword = async (password) => {
    const comparision = await bcrypt.compare(password, this.password)
    return comparision
  }

  return User
}

export default user
